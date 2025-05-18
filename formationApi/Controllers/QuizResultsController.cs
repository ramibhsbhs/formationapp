using formationApi.data.Repositories;
using formationApi.dtos.response;
using formationApi.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
                .Include(a => a.Module)
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
                    AttemptType = a.AttemptType,
                    ModuleId = a.ModuleId,
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
                    Module = a.Module != null ? new ModuleBasicDto
                    {
                        Id = a.Module.Id,
                        Title = a.Module.Title,
                        Position = a.Module.Position,
                        Formation = new FormationBasicDto
                        {
                            Id = a.Module.FormationId,
                            Title = a.Module.Formation?.Title ?? ""
                        }
                    } : null,
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
                .Include(a => a.Module)
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
                AttemptType = a.AttemptType,
                ModuleId = a.ModuleId,
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
                Module = a.Module != null ? new ModuleBasicDto
                {
                    Id = a.Module.Id,
                    Title = a.Module.Title,
                    Position = a.Module.Position
                } : null
            }).ToList();

            return Ok(resultsDto);
        }

        /// <summary>
        /// Récupère les résultats de quiz pour un module spécifique
        /// </summary>
        /// <param name="formationId">ID de la formation</param>
        /// <param name="moduleId">ID du module</param>
        /// <param name="sessionId">ID de la session (optionnel)</param>
        /// <returns>Résultats de quiz pour le module</returns>
        [HttpGet("module/{formationId:int}/{moduleId:int}")]
        [Authorize]
        public async Task<ActionResult<object>> GetModuleQuizResults(int formationId, int moduleId, [FromQuery] int? sessionId = null)
        {
            // Récupérer l'utilisateur actuel
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null) return Unauthorized();

            // Récupérer le module avec son quiz
            var module = await _repositoryWrapper.Module.GetAllAsQueryable()
                .Include(m => m.Quiz)
                .FirstOrDefaultAsync(m => m.Id == moduleId && m.FormationId == formationId);

            if (module == null) return NotFound("Module non trouvé");
            if (module.QuizId == null) return BadRequest("Aucun quiz associé à ce module");

            // Récupérer les tentatives de quiz pour ce module et cet utilisateur
            // Assurez-vous que le quizId correspond exactement au quizId du module
            var attemptsQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == user.Id && a.QuizId == module.QuizId.Value);

            // Si un sessionId est fourni, filtrer par session
            if (sessionId.HasValue)
            {
                attemptsQuery = attemptsQuery.Where(a => a.SessionId == sessionId.Value);
            }

            var attempts = await attemptsQuery
                .OrderByDescending(a => a.CreatedAt)
                .ToListAsync();

            // Vérifier si l'utilisateur a déjà passé le quiz
            var hasAttempted = attempts.Any();
            var latestAttempt = attempts.FirstOrDefault();
            var hasPassed = latestAttempt != null && latestAttempt.HasPassed;
            var score = latestAttempt?.Score ?? 0;
            var attemptDate = latestAttempt?.AttemptedAt ?? latestAttempt?.CreatedAt;

            // Compter le nombre de tentatives pour ce quiz et cet utilisateur
            var attemptCount = await attemptsQuery.CountAsync();

            // Construire la réponse
            var response = new
            {
                HasAttempted = hasAttempted,
                HasPassed = hasPassed,
                Score = score,
                AttemptDate = attemptDate,
                ModuleId = moduleId,
                ModuleTitle = module.Title,
                QuizId = module.QuizId.Value,
                // Ajouter l'ID de la tentative si elle existe
                AttemptId = latestAttempt?.Id,
                // Ajouter le nombre de tentatives
                AttemptCount = attemptCount
            };

            return Ok(response);
        }

        /// <summary>
        /// Récupère la progression d'un utilisateur pour une formation spécifique
        /// </summary>
        /// <param name="formationId">ID de la formation</param>
        /// <param name="sessionId">ID de la session (optionnel)</param>
        /// <returns>Progression de l'utilisateur pour la formation</returns>
        [HttpGet("formation/{formationId:int}/progress")]
        [Authorize]
        public async Task<ActionResult<List<object>>> GetFormationProgress(int formationId, [FromQuery] int? sessionId = null)
        {
            // Récupérer l'utilisateur actuel
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null) return Unauthorized();

            // Récupérer la formation avec ses modules
            var formation = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.Modules)
                .ThenInclude(m => m.Quiz)
                .FirstOrDefaultAsync(f => f.Id == formationId);

            if (formation == null) return NotFound("Formation non trouvée");

            // Récupérer tous les modules avec quiz
            var modulesWithQuiz = formation.Modules
                .Where(m => m.QuizId.HasValue)
                .ToList();

            // Préparer la liste des résultats
            var progressList = new List<object>();

            // Pour chaque module avec quiz, récupérer les tentatives de l'utilisateur
            foreach (var module in modulesWithQuiz)
            {
                if (!module.QuizId.HasValue) continue;

                // Récupérer les tentatives de quiz pour ce module et cet utilisateur
                var attemptsQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                    .Where(a => a.UserId == user.Id && a.QuizId == module.QuizId.Value);

                // Si un sessionId est fourni, filtrer par session
                if (sessionId.HasValue)
                {
                    attemptsQuery = attemptsQuery.Where(a => a.SessionId == sessionId.Value);
                }

                var attempts = await attemptsQuery
                    .OrderByDescending(a => a.CreatedAt)
                    .ToListAsync();

                // Vérifier si l'utilisateur a déjà passé le quiz
                var hasAttempted = attempts.Any();
                var latestAttempt = attempts.FirstOrDefault();
                var hasPassed = latestAttempt != null && latestAttempt.HasPassed;
                var score = latestAttempt?.Score ?? 0;
                var attemptDate = latestAttempt?.AttemptedAt ?? latestAttempt?.CreatedAt;

                // Compter le nombre de tentatives pour ce quiz et cet utilisateur
                var attemptCount = attempts.Count;

                // Ajouter les résultats à la liste
                progressList.Add(new
                {
                    ModuleId = module.Id,
                    ModuleTitle = module.Title,
                    QuizId = module.QuizId.Value,
                    HasAttempted = hasAttempted,
                    HasPassed = hasPassed,
                    Score = score,
                    AttemptDate = attemptDate,
                    AttemptCount = attemptCount,
                    AttemptId = latestAttempt?.Id
                });
            }

            // Si un sessionId est fourni, récupérer également les tentatives pour le quiz final
            if (sessionId.HasValue && formation.FinalQuizId.HasValue)
            {
                // Récupérer les tentatives de quiz final pour cet utilisateur et cette session
                var finalQuizAttemptsQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                    .Where(a => a.UserId == user.Id && a.QuizId == formation.FinalQuizId.Value && a.SessionId == sessionId.Value);

                var finalQuizAttempts = await finalQuizAttemptsQuery
                    .OrderByDescending(a => a.CreatedAt)
                    .ToListAsync();

                // Vérifier si l'utilisateur a déjà passé le quiz final
                var hasAttemptedFinal = finalQuizAttempts.Any();
                var latestFinalAttempt = finalQuizAttempts.FirstOrDefault();
                var hasPassedFinal = latestFinalAttempt != null && latestFinalAttempt.HasPassed;
                var finalScore = latestFinalAttempt?.Score ?? 0;
                var finalAttemptDate = latestFinalAttempt?.AttemptedAt ?? latestFinalAttempt?.CreatedAt;

                // Compter le nombre de tentatives pour le quiz final
                var finalAttemptCount = finalQuizAttempts.Count;

                // Ajouter les résultats du quiz final à la liste
                progressList.Add(new
                {
                    ModuleId = 0, // 0 pour indiquer qu'il s'agit du quiz final
                    ModuleTitle = "Quiz Final",
                    QuizId = formation.FinalQuizId.Value,
                    HasAttempted = hasAttemptedFinal,
                    HasPassed = hasPassedFinal,
                    Score = finalScore,
                    AttemptDate = finalAttemptDate,
                    AttemptCount = finalAttemptCount,
                    AttemptId = latestFinalAttempt?.Id,
                    IsFinalQuiz = true
                });
            }

            return Ok(progressList);
        }

        /// <summary>
        /// Récupère les résultats de quiz pour une formation spécifique, filtrés par le groupe du superviseur
        /// </summary>
        /// <param name="formationId">ID de la formation</param>
        /// <returns>Résultats de quiz pour la formation, filtrés par groupe</returns>
        [HttpGet("formation/{formationId:int}/supervisor")]
        [Authorize(Roles = "HierarchicalLeader,TeamLeader,PostLeader")]
        public async Task<ActionResult<FormationResultsDto>> GetFormationResultsForSupervisor(int formationId)
        {
            // Récupérer l'utilisateur courant (superviseur)
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null)
                return Unauthorized("Utilisateur non trouvé");

            // Vérifier si l'utilisateur appartient à un groupe
            if (!user.GroupId.HasValue)
                return BadRequest("Vous n'êtes pas associé à un groupe");

            // Récupérer la formation
            var formation = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.Sessions)
                .FirstOrDefaultAsync(f => f.Id == formationId);

            if (formation == null)
                return NotFound("Formation non trouvée");

            // Récupérer toutes les sessions de la formation
            var sessionIds = formation.Sessions.Select(s => s.Id).ToList();

            // Récupérer les utilisateurs du même groupe que le superviseur
            var usersInGroup = await _repositoryWrapper.UserManager.Users
                .Where(u => u.GroupId == user.GroupId)
                .Select(u => u.Id)
                .ToListAsync();

            // Récupérer toutes les tentatives de quiz pour ces sessions et pour les utilisateurs du groupe
            var attempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => sessionIds.Contains(a.SessionId) && usersInGroup.Contains(a.UserId))
                .Include(a => a.User)
                .Include(a => a.Quiz)
                .Include(a => a.Session)
                .ThenInclude(s => s.Formation)
                .Include(a => a.Module)
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
                    AttemptType = a.AttemptType,
                    ModuleId = a.ModuleId,
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
                    Module = a.Module != null ? new ModuleBasicDto
                    {
                        Id = a.Module.Id,
                        Title = a.Module.Title,
                        Position = a.Module.Position,
                        Formation = new FormationBasicDto
                        {
                            Id = a.Module.FormationId,
                            Title = a.Module.Formation?.Title ?? ""
                        }
                    } : null,
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
                .Include(a => a.Module)
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
                AttemptType = attempt.AttemptType,
                ModuleId = attempt.ModuleId,
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
                Module = attempt.Module != null ? new ModuleBasicDto
                {
                    Id = attempt.Module.Id,
                    Title = attempt.Module.Title,
                    Position = attempt.Module.Position
                } : null,
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
