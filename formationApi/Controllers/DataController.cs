using formationApi.data.Repositories;
using formationApi.dtos.response;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using formationApi.data.models;
using formationApi.data.Entities;
using System.Linq;
using System.Security.Claims;

namespace formationApi.Controllers
{
    public class DataController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;
        private readonly UserManager<AppUser> _userManager;

        public DataController(IRepositoryWrapper repositoryWrapper, UserManager<AppUser> userManager)
        {
            _repositoryWrapper = repositoryWrapper;
            _userManager = repositoryWrapper.UserManager;
        }

        /// <summary>
        /// Récupère les données du tableau de bord pour l'administrateur
        /// </summary>
        [HttpGet("admin")]
        public async Task<ActionResult<DashboardDto>> GetAdminDashboardDataAsync()
        {
            var users = await _userManager.Users.CountAsync();
            var formations = await _repositoryWrapper.Formation.GetAllAsQueryable().CountAsync();
            var sessions = await _repositoryWrapper.Session.GetAllAsQueryable().CountAsync();
            var modules = await _repositoryWrapper.Module.GetAllAsQueryable().CountAsync();
            var groups = await _repositoryWrapper.Group.GetAllAsQueryable().CountAsync();
            var feedbacks = await _repositoryWrapper.Feedback.GetAllAsQueryable().CountAsync();
            var certifications = await _repositoryWrapper.Certifications.GetAllAsQueryable().CountAsync();
            var quizzes = await _repositoryWrapper.Quiz.GetAllAsQueryable().CountAsync();
            var attempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable().CountAsync();

            // Statistiques par catégorie
            var formationsByCategory = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .GroupBy(f => f.Category)
                .Select(g => new CategoryStatDto
                {
                    Category = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();

            // Statistiques des tentatives par mois (6 derniers mois)
            var sixMonthsAgo = DateTime.UtcNow.AddMonths(-6);
            var quizAttemptsOverTime = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.CreatedAt >= sixMonthsAgo)
                .GroupBy(a => new { Month = a.CreatedAt.Month, Year = a.CreatedAt.Year })
                .Select(g => new
                {
                    Month = g.Key.Month,
                    Year = g.Key.Year,
                    Count = g.Count()
                })
                .OrderBy(x => x.Year)
                .ThenBy(x => x.Month)
                .ToListAsync();

            var monthlyStats = quizAttemptsOverTime.Select(x => new MonthlyStatDto
            {
                Month = $"{x.Month}/{x.Year}",
                Count = x.Count
            }).ToList();

            // Statistiques des évaluations
            var feedbackRatings = await _repositoryWrapper.Feedback.GetAllAsQueryable()
                .GroupBy(f => Math.Round(f.Value * 5) / 5) // Arrondir à 0.5 près
                .Select(g => new RatingStatDto
                {
                    Rating = g.Key,
                    Count = g.Count()
                })
                .OrderBy(r => r.Rating)
                .ToListAsync();

            // Top formations
            var topFormations = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Include(a => a.Quiz)
                .Include(a => a.Session)
                .ThenInclude(s => s.Formation)
                .GroupBy(a => new { FormationId = a.Session.FormationId, Title = a.Session.Formation.Title })
                .Select(g => new TopItemDto
                {
                    Id = g.Key.FormationId,
                    Title = g.Key.Title,
                    Count = g.Count()
                })
                .OrderByDescending(f => f.Count)
                .Take(5)
                .ToListAsync();

            return new DashboardDto
            {
                TotalUsers = users,
                TotalFormations = formations,
                TotalSessions = sessions,
                TotalModules = modules,
                TotalGroups = groups,
                TotalFeedbacks = feedbacks,
                TotalCertifications = certifications,
                TotalQuizzes = quizzes,
                TotalQuizAttempts = attempts,
                FormationsByCategory = formationsByCategory,
                QuizAttemptsOverTime = monthlyStats,
                FeedbackRatings = feedbackRatings,
                TopFormations = topFormations
            };
        }

        /// <summary>
        /// Récupère les données du tableau de bord pour le superviseur
        /// </summary>
        [HttpGet("supervisor")]
        public async Task<ActionResult<SupervisorDashboardDto>> GetSupervisorDashboardDataAsync()
        {
            // Récupérer l'utilisateur connecté
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId) || !int.TryParse(userId, out int userIdInt))
            {
                return Unauthorized();
            }

            // Récupérer le groupe du superviseur
            var user = await _userManager.Users
                .Include(u => u.Group)
                .FirstOrDefaultAsync(u => u.Id == userIdInt);

            if (user?.Group == null)
            {
                return NotFound("Groupe non trouvé");
            }

            var groupId = user.Group.Id;
            var groupName = user.Group.Name;

            // Statistiques du groupe
            var groupMembers = await _userManager.Users
                .Where(u => u.GroupId == groupId)
                .CountAsync();

            var groupFormations = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.Groups)
                .Where(f => f.Groups.Any(g => g.Id == groupId))
                .CountAsync();

            var groupCertifications = await _repositoryWrapper.Certifications.GetAllAsQueryable()
                .Include(c => c.User)
                .Where(c => c.User.GroupId == groupId)
                .CountAsync();

            var groupQuizAttempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Include(a => a.User)
                .Where(a => a.User.GroupId == groupId)
                .CountAsync();

            // Récupérer les scores et calculer la moyenne côté client
            var scores = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Include(a => a.User)
                .Where(a => a.User.GroupId == groupId && a.Score.HasValue)
                .Select(a => a.Score.Value)
                .ToListAsync();

            var averageGroupScore = scores.Any() ? scores.Average() : 0;

            // Progrès des utilisateurs - Approche en deux étapes pour éviter les problèmes de projection
            var users = await _userManager.Users
                .Where(u => u.GroupId == groupId)
                .Select(u => new
                {
                    u.Id,
                    u.UserName,
                    FormationsCompleted = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                        .Where(a => a.UserId == u.Id && a.HasPassed && a.AttemptType == AttemptType.Formation)
                        .Select(a => a.Session.FormationId)
                        .Distinct()
                        .Count(),
                    CertificationsEarned = _repositoryWrapper.Certifications.GetAllAsQueryable()
                        .Count(c => c.UserId == u.Id)
                })
                .ToListAsync();

            // Maintenant, créons la liste UserProgressDto avec les scores moyens calculés séparément
            var userProgress = new List<UserProgressDto>();
            foreach (var userData in users)
            {
                var averageScore = CalculateAverageScore(userData.Id);
                userProgress.Add(new UserProgressDto
                {
                    UserId = userData.Id,
                    UserName = userData.UserName,
                    FormationsCompleted = userData.FormationsCompleted,
                    CertificationsEarned = userData.CertificationsEarned,
                    AverageScore = averageScore
                });
            }

            // Tentatives par mois
            var sixMonthsAgo = DateTime.UtcNow.AddMonths(-6);
            var groupAttemptsOverTime = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Include(a => a.User)
                .Where(a => a.User.GroupId == groupId && a.CreatedAt >= sixMonthsAgo)
                .GroupBy(a => new { Month = a.CreatedAt.Month, Year = a.CreatedAt.Year })
                .Select(g => new
                {
                    Month = g.Key.Month,
                    Year = g.Key.Year,
                    Count = g.Count()
                })
                .OrderBy(x => x.Year)
                .ThenBy(x => x.Month)
                .ToListAsync();

            var monthlyStats = groupAttemptsOverTime.Select(x => new MonthlyStatDto
            {
                Month = $"{x.Month}/{x.Year}",
                Count = x.Count
            }).ToList();

            // Top formations du groupe
            var topGroupFormations = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Include(a => a.User)
                .Include(a => a.Session)
                .ThenInclude(s => s.Formation)
                .Where(a => a.User.GroupId == groupId)
                .GroupBy(a => new { FormationId = a.Session.FormationId, Title = a.Session.Formation.Title })
                .Select(g => new TopItemDto
                {
                    Id = g.Key.FormationId,
                    Title = g.Key.Title,
                    Count = g.Count()
                })
                .OrderByDescending(f => f.Count)
                .Take(5)
                .ToListAsync();

            return new SupervisorDashboardDto
            {
                GroupId = groupId,
                GroupName = groupName,
                TotalGroupMembers = groupMembers,
                TotalGroupFormations = groupFormations,
                TotalGroupCertifications = groupCertifications,
                TotalGroupQuizAttempts = groupQuizAttempts,
                AverageGroupScore = averageGroupScore,
                UserProgress = userProgress,
                GroupAttemptsOverTime = monthlyStats,
                TopGroupFormations = topGroupFormations
            };
        }

        /// <summary>
        /// Récupère les données du tableau de bord pour le candidat
        /// </summary>
        [HttpGet("candidate")]
        public async Task<ActionResult<CandidateDashboardDto>> GetCandidateDashboardDataAsync()
        {
            // Récupérer l'utilisateur connecté
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId) || !int.TryParse(userId, out int userIdInt))
            {
                return Unauthorized();
            }

            // Statistiques personnelles
            var formationsEnrolled = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.Groups)
                .ThenInclude(g => g.Users)
                .Where(f => f.Groups.Any(g => g.Users.Any(u => u.Id == userIdInt)))
                .CountAsync();

            var formationsCompleted = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == userIdInt && a.HasPassed && a.AttemptType == AttemptType.Formation)
                .Select(a => a.Session.FormationId)
                .Distinct()
                .CountAsync();

            var certificationsEarned = await _repositoryWrapper.Certifications.GetAllAsQueryable()
                .CountAsync(c => c.UserId == userIdInt);

            var quizAttempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .CountAsync(a => a.UserId == userIdInt);

            // Récupérer les scores et calculer la moyenne côté client
            var scores = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == userIdInt && a.Score.HasValue)
                .Select(a => a.Score.Value)
                .ToListAsync();

            var averageScore = scores.Any() ? scores.Average() : 0;

            // Progrès des formations
            var formationProgress = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.Groups)
                .ThenInclude(g => g.Users)
                .Include(f => f.Modules)
                .Where(f => f.Groups.Any(g => g.Users.Any(u => u.Id == userIdInt)))
                .Select(f => new FormationProgressDto
                {
                    FormationId = f.Id,
                    FormationTitle = f.Title,
                    TotalModules = f.Modules.Count,
                    ModulesCompleted = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                        .Count(a => a.UserId == userIdInt && a.HasPassed && a.AttemptType == AttemptType.Module &&
                                f.Modules.Any(m => m.Id == a.ModuleId)),
                    FinalQuizPassed = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                        .Any(a => a.UserId == userIdInt && a.HasPassed && a.AttemptType == AttemptType.Formation &&
                             a.QuizId == f.FinalQuizId),
                    Score = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                        .Where(a => a.UserId == userIdInt && a.Score.HasValue && a.AttemptType == AttemptType.Formation &&
                               a.QuizId == f.FinalQuizId)
                        .Select(a => a.Score)
                        .FirstOrDefault()
                })
                .ToListAsync();

            // Tentatives par mois
            var sixMonthsAgo = DateTime.UtcNow.AddMonths(-6);
            var attemptsOverTime = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == userIdInt && a.CreatedAt >= sixMonthsAgo)
                .GroupBy(a => new { Month = a.CreatedAt.Month, Year = a.CreatedAt.Year })
                .Select(g => new
                {
                    Month = g.Key.Month,
                    Year = g.Key.Year,
                    Count = g.Count()
                })
                .OrderBy(x => x.Year)
                .ThenBy(x => x.Month)
                .ToListAsync();

            var monthlyStats = attemptsOverTime.Select(x => new MonthlyStatDto
            {
                Month = $"{x.Month}/{x.Year}",
                Count = x.Count
            }).ToList();

            return new CandidateDashboardDto
            {
                TotalFormationsEnrolled = formationsEnrolled,
                TotalFormationsCompleted = formationsCompleted,
                TotalCertificationsEarned = certificationsEarned,
                TotalQuizAttempts = quizAttempts,
                AverageScore = averageScore,
                FormationProgress = formationProgress,
                AttemptsOverTime = monthlyStats
            };
        }

        /// <summary>
        /// Récupère les données du tableau de bord pour le manager
        /// </summary>
        [HttpGet("manager")]
        public async Task<ActionResult<DashboardDto>> GetManagerDashboardDataAsync()
        {
            // Pour le manager, on utilise les mêmes données que l'admin
            return await GetAdminDashboardDataAsync();
        }

        /// <summary>
        /// Calcule le score moyen pour un utilisateur
        /// </summary>
        private double CalculateAverageScore(int userId)
        {
            // Au lieu d'utiliser cette méthode dans une projection LINQ, nous allons
            // modifier notre approche pour éviter les fuites de mémoire
            var scores = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == userId && a.Score.HasValue)
                .Select(a => a.Score.Value)
                .ToList();

            return scores.Any() ? scores.Average() : 0;
        }
    }
}