using formationApi.data.Repositories;
using formationApi.dtos.response;
using formationApi.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static formationApi.dtos.response.GroupDto;

namespace formationApi.Controllers
{
    [Authorize]
    public class QuizResultsController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;

        public QuizResultsController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        /// <summary>
        /// Récupère les résultats de quiz pour une formation spécifique
        /// </summary>
        /// <param name="formationId">ID de la formation</param>
        /// <returns>Résultats de quiz pour la formation</returns>
        [HttpGet("formation/{formationId:int}")]
        [Authorize(Roles = "Administrator,Manager")]
        public async Task<ActionResult<FormationResultsDto>> GetFormationResults(int formationId)
        {
            // Récupérer la formation
            var formation = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.Sessions)
                .FirstOrDefaultAsync(f => f.Id == formationId);

            if (formation == null)
                return NotFound("Formation non trouvée");

            // Récupérer toutes les sessions de la formation
            var sessionIds = formation.Sessions.Select(s => s.Id).ToList();

            // Récupérer toutes les tentatives de quiz pour ces sessions
            var attempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => sessionIds.Contains(a.SessionId))
                .Include(a => a.User)
                .Include(a => a.Quiz)
                .Include(a => a.Session)
                .ThenInclude(s => s.Formation)
                .Include(a => a.QuestionResponses)
                .ThenInclude(qr => qr.Question)
                .ThenInclude(q => q.Answers)
                .OrderByDescending(a => a.Score)
                .ToListAsync();

            // Créer le DTO de résultats
            var resultsDto = new FormationResultsDto
            {
                FormationId = formationId,
                FormationTitle = formation.Title,
                Attempts = attempts.Select(a => new QuizAttemptDto
                {
                    Id = a.Id,
                    UserId = a.UserId,
                    QuizId = a.QuizId,
                    SessionId = a.SessionId,
                    StartTime = a.StartTime,
                    AttemptedAt = a.AttemptedAt ?? a.CreatedAt,
                    IsCompleted = a.IsCompleted,
                    Score = a.Score ?? 0,
                    HasPassed = a.HasPassed,
                    CreatedAt = a.CreatedAt,
                    User = new UserDto
                    {
                        Id = a.User.Id,
                        UserName = a.User.UserName,
                        Email = a.User.Email
                    },
                    Quiz = new QuizBasicDto
                    {
                        Id = a.Quiz.Id,
                        Title = a.Quiz.Title
                    },
                    Session = new SessionBasicDto
                    {
                        Id = a.Session.Id,
                        Title = a.Session.Title,
                        Formation = new FormationBasicDto
                        {
                            Id = a.Session.Formation.Id,
                            Title = a.Session.Formation.Title
                        }
                    },
                    QuestionResponses = a.QuestionResponses.Select(qr => new QuestionResponseDto
                    {
                        Id = qr.Id,
                        QuestionId = qr.QuestionId,
                        SelectedAnswerIds = qr.SelectedAnswerIds,
                        Question = new QuestionWithAnswersDto
                        {
                            Id = qr.Question.Id,
                            Title = qr.Question.Title,
                            Answers = qr.Question.Answers.Select(ans => new AnswerDto
                            {
                                Id = ans.Id,
                                Text = ans.Text,
                                IsCorrect = ans.IsCorrect
                            }).ToList()
                        }
                    }).ToList()
                }).ToList(),
                SessionResults = formation.Sessions.Select(s => new SessionResultsDto
                {
                    SessionId = s.Id,
                    SessionTitle = s.Title,
                    Attempts = attempts
                        .Where(a => a.SessionId == s.Id)
                        .Select(a => new QuizAttemptDto
                        {
                            Id = a.Id,
                            UserId = a.UserId,
                            QuizId = a.QuizId,
                            SessionId = a.SessionId,
                            StartTime = a.StartTime,
                            AttemptedAt = a.AttemptedAt ?? a.CreatedAt,
                            IsCompleted = a.IsCompleted,
                            Score = a.Score ?? 0,
                            HasPassed = a.HasPassed,
                            CreatedAt = a.CreatedAt,
                            User = new UserDto
                            {
                                Id = a.User.Id,
                                UserName = a.User.UserName,
                                Email = a.User.Email
                            }
                        }).ToList()
                }).ToList()
            };

            return Ok(resultsDto);
        }

        /// <summary>
        /// Récupère les résultats de quiz pour une session spécifique
        /// </summary>
        /// <param name="sessionId">ID de la session</param>
        /// <returns>Résultats de quiz pour la session</returns>
        [HttpGet("session/{sessionId:int}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<List<QuizAttemptDto>>> GetSessionResults(int sessionId)
        {
            // Récupérer la session
            var session = await _repositoryWrapper.Session.Get(sessionId);
            if (session == null)
                return NotFound("Session non trouvée");

            // Récupérer toutes les tentatives de quiz pour cette session
            var attempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.SessionId == sessionId)
                .Include(a => a.User)
                .Include(a => a.Quiz)
                .OrderByDescending(a => a.Score)
                .ToListAsync();

            // Créer le DTO de résultats
            var resultsDto = attempts.Select(a => new QuizAttemptDto
            {
                Id = a.Id,
                UserId = a.UserId,
                QuizId = a.QuizId,
                SessionId = a.SessionId,
                StartTime = a.StartTime,
                AttemptedAt = a.AttemptedAt ?? a.CreatedAt,
                IsCompleted = a.IsCompleted,
                Score = a.Score ?? 0,
                HasPassed = a.HasPassed,
                CreatedAt = a.CreatedAt,
                User = new UserDto
                {
                    Id = a.User.Id,
                    UserName = a.User.UserName,
                    Email = a.User.Email
                },
                Quiz = new QuizBasicDto
                {
                    Id = a.Quiz.Id,
                    Title = a.Quiz.Title
                }
            }).ToList();

            return Ok(resultsDto);
        }

        /// <summary>
        /// Récupère une tentative de quiz spécifique
        /// </summary>
        /// <param name="attemptId">ID de la tentative</param>
        /// <returns>Détails de la tentative de quiz</returns>
        [HttpGet("attempt/{attemptId:int}")]
        [Authorize]
        public async Task<ActionResult<QuizAttemptDto>> GetQuizAttempt(int attemptId)
        {
            // Récupérer la tentative de quiz
            var attempt = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.Id == attemptId)
                .Include(a => a.User)
                .Include(a => a.Quiz)
                .Include(a => a.Session)
                .Include(a => a.QuestionResponses)
                .ThenInclude(qr => qr.Question)
                .ThenInclude(q => q.Answers)
                .FirstOrDefaultAsync();

            if (attempt == null)
                return NotFound("Tentative de quiz non trouvée");

            // Vérifier que l'utilisateur est autorisé à voir cette tentative
            var currentUserId = User.GetUserId();
            var isAdmin = User.IsInRole("Administrator");

            if (!isAdmin && attempt.UserId != currentUserId)
                return Forbid("Vous n'êtes pas autorisé à voir cette tentative");

            // Créer le DTO de résultats
            var attemptDto = new QuizAttemptDto
            {
                Id = attempt.Id,
                UserId = attempt.UserId,
                QuizId = attempt.QuizId,
                SessionId = attempt.SessionId,
                StartTime = attempt.StartTime,
                AttemptedAt = attempt.AttemptedAt ?? attempt.CreatedAt,
                IsCompleted = attempt.IsCompleted,
                Score = attempt.Score ?? 0,
                HasPassed = attempt.HasPassed,
                CreatedAt = attempt.CreatedAt,
                User = new UserDto
                {
                    Id = attempt.User.Id,
                    UserName = attempt.User.UserName,
                    Email = attempt.User.Email
                },
                Quiz = new QuizBasicDto
                {
                    Id = attempt.Quiz.Id,
                    Title = attempt.Quiz.Title
                },
                Session = new SessionBasicDto
                {
                    Id = attempt.Session.Id,
                    Title = attempt.Session.Title
                },
                QuestionResponses = attempt.QuestionResponses.Select(qr => new QuestionResponseDto
                {
                    Id = qr.Id,
                    QuestionId = qr.QuestionId,
                    SelectedAnswerIds = qr.SelectedAnswerIds,
                    Question = new QuestionWithAnswersDto
                    {
                        Id = qr.Question.Id,
                        Title = qr.Question.Title,
                        Answers = qr.Question.Answers.Select(ans => new AnswerDto
                        {
                            Id = ans.Id,
                            Text = ans.Text,
                            IsCorrect = ans.IsCorrect
                        }).ToList()
                    }
                }).ToList()
            };

            return Ok(attemptDto);
        }
    }
}
