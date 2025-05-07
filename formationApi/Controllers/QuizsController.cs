using formationApi.data.Repositories;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Mvc;
using formationApi.data.Entities;
using Microsoft.AspNetCore.Authorization;
using formationApi.dtos.response;
using Microsoft.EntityFrameworkCore;
using formationApi.data.models;
using formationApi.Extensions;
using Microsoft.AspNetCore.Identity;
using formationApi.services.NotificationService;

namespace formationApi.Controllers
{
    public class QuizsController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;


        private readonly INotificationService _notificationService;

        public QuizsController(
            IRepositoryWrapper repositoryWrapper,
            INotificationService notificationService)
        {
            _repositoryWrapper = repositoryWrapper;
            _notificationService = notificationService;
        }


        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> CreateQuiz([FromBody] CreateQuizDto createQuizDto)
        {

            var createdAt = DateTime.UtcNow;
            var quiz = new Quiz
            {
                Title = createQuizDto.Title,
                Questions = createQuizDto.Questions.Select(q => new Question
                {
                    Title = q.Title,
                    CreatedAt = createdAt,
                    Enable = true,
                    Answers = q.Answers.Select(a => new Answer
                    {
                        Text = a.Text,
                        IsCorrect = a.IsCorrect,
                        CreatedAt = createdAt,
                        Enable = true
                    }).ToList()
                }).ToList()
            };

            await _repositoryWrapper.Quiz.Create(quiz);

            return CreatedAtAction(nameof(CreateQuiz), new { id = quiz.Id }, quiz);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllQuizzes()
        {
            var quizzes = await _repositoryWrapper.Quiz.GetAll();
            return Ok(quizzes.ToDtoList());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetQuizById(int id)
        {
            var quiz = await _repositoryWrapper.Quiz.Get(id);
            if (quiz == null)
            {
                return NotFound();
            }
            return Ok(quiz.ToDto());
        }

        /// <summary>
        /// Vérifie si l'utilisateur peut passer un quiz pour une session donnée
        /// </summary>
        /// <param name="sessionId">ID de la session</param>
        /// <returns>Informations d'éligibilité au quiz</returns>
        [HttpGet("validate/{sessionId:int}")]
        [Authorize]
        public async Task<ActionResult<QuizEligibilityDto>> CheckQuizEligibility(int sessionId)
        {
            // Récupérer l'utilisateur actuel
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null) return Unauthorized();

            // Récupérer la session
            var session = await _repositoryWrapper.Session.GetAllAsQueryable()
                .Include(s => s.Formation)
                .ThenInclude(f => f.FinalQuiz)
                .FirstOrDefaultAsync(s => s.Id == sessionId);

            if (session == null) return NotFound("Session non trouvée");

            // Récupérer le quiz associé à la formation
            var quizId = session.Formation.FinalQuizId;
            if (quizId == null) return BadRequest("Aucun quiz associé à cette formation");

            // Vérifier si l'utilisateur a déjà passé ce quiz
            var previousAttempt = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == user.Id && a.SessionId == sessionId)
                .OrderByDescending(a => a.CreatedAt)
                .FirstOrDefaultAsync();

            // Déterminer si l'utilisateur peut passer le quiz
            // Nouvelle règle: l'utilisateur ne peut passer le quiz que s'il n'a pas de tentative précédente
            bool canTakeQuiz = previousAttempt == null;

            // Vérifier également que la session est active
            var now = DateTime.UtcNow;
            var sessionEndDate = session.EndDate;
            bool sessionIsActive = DateOnly.FromDateTime(now) <= sessionEndDate;

            // L'utilisateur ne peut passer le quiz que si la session est active
            canTakeQuiz = canTakeQuiz && sessionIsActive;

            // Construire la réponse
            var response = new QuizEligibilityDto
            {
                CanTakeQuiz = canTakeQuiz,
                QuizId = quizId.Value,
                FormationTitle = session.Formation.Title,
                SessionTitle = session.Title,
                PreviousAttempt = previousAttempt == null ? null : new PreviousAttemptDto
                {
                    Id = previousAttempt.Id,
                    Score = previousAttempt.Score ?? 0,
                    CreatedAt = previousAttempt.CreatedAt,
                    PassedStatus = previousAttempt.HasPassed
                }
            };

            return Ok(response);
        }

        /// <summary>
        /// Vérifie si l'utilisateur peut passer un quiz pour un module donné
        /// </summary>
        /// <param name="formationId">ID de la formation</param>
        /// <param name="moduleId">ID du module</param>
        /// <param name="sessionId">ID de la session (optionnel)</param>
        /// <returns>Informations d'éligibilité au quiz de module</returns>
        [HttpGet("validate/module/{formationId:int}/{moduleId:int}")]
        [Authorize]
        public async Task<ActionResult<ModuleQuizEligibilityDto>> CheckModuleQuizEligibility(int formationId, int moduleId, [FromQuery] int? sessionId = null)
        {
            // Récupérer l'utilisateur actuel
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null) return Unauthorized();

            // Récupérer le module avec son quiz
            var module = await _repositoryWrapper.Module.GetAllAsQueryable()
                .Include(m => m.Quiz)
                .Include(m => m.Formation)
                .FirstOrDefaultAsync(m => m.Id == moduleId && m.FormationId == formationId);

            if (module == null) return NotFound("Module non trouvé");
            if (module.QuizId == null) return BadRequest("Aucun quiz associé à ce module");

            // Vérifier si l'utilisateur a déjà passé ce quiz
            var previousAttemptQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == user.Id && a.QuizId == module.QuizId);

            // Si un sessionId est fourni, filtrer par session
            if (sessionId.HasValue)
            {
                previousAttemptQuery = previousAttemptQuery.Where(a => a.SessionId == sessionId.Value);
            }

            var previousAttempt = await previousAttemptQuery
                .OrderByDescending(a => a.CreatedAt)
                .FirstOrDefaultAsync();

            // Déterminer si l'utilisateur peut passer le quiz
            bool canTakeQuiz = true;

            // Si l'utilisateur a déjà passé le quiz et l'a réussi, il ne peut pas le repasser
            if (previousAttempt != null && previousAttempt.HasPassed)
            {
                canTakeQuiz = false;
            }

            // Si un sessionId est fourni, vérifier que la session est active
            if (sessionId.HasValue && canTakeQuiz)
            {
                var session = await _repositoryWrapper.Session.GetAllAsQueryable()
                    .FirstOrDefaultAsync(s => s.Id == sessionId.Value);

                if (session != null)
                {
                    var now = DateTime.UtcNow;
                    var sessionStartDate = session.StartDate;
                    var sessionEndDate = session.EndDate;
                    bool sessionIsActive = DateOnly.FromDateTime(now) >= sessionStartDate && DateOnly.FromDateTime(now) <= sessionEndDate;

                    // L'utilisateur ne peut passer le quiz que si la session est active
                    canTakeQuiz = canTakeQuiz && sessionIsActive;
                }
                else
                {
                    return NotFound("Session non trouvée");
                }
            }

            // Construire la réponse
            var response = new ModuleQuizEligibilityDto
            {
                CanTakeQuiz = canTakeQuiz,
                QuizId = module.QuizId.Value,
                FormationTitle = module.Formation.Title,
                ModuleTitle = module.Title,
                PreviousAttempt = previousAttempt == null ? null : new PreviousAttemptDto
                {
                    Id = previousAttempt.Id,
                    Score = previousAttempt.Score ?? 0,
                    CreatedAt = previousAttempt.CreatedAt,
                    PassedStatus = previousAttempt.HasPassed
                }
            };

            return Ok(response);
        }

        /// <summary>
        /// Vérifie si l'utilisateur peut passer le quiz final d'une formation
        /// </summary>
        /// <param name="formationId">ID de la formation</param>
        /// <param name="sessionId">ID de la session (optionnel)</param>
        /// <returns>Informations d'éligibilité au quiz final</returns>
        [HttpGet("validate/final/{formationId:int}")]
        [Authorize]
        public async Task<ActionResult<FinalQuizEligibilityDto>> CheckFinalQuizEligibility(int formationId, [FromQuery] int? sessionId = null)
        {
            // Récupérer l'utilisateur actuel
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null) return Unauthorized();

            // Récupérer la formation avec son quiz final et ses modules
            var formation = await _repositoryWrapper.Formation.GetAllAsQueryable()
                .Include(f => f.FinalQuiz)
                .Include(f => f.Modules)
                    .ThenInclude(m => m.Quiz)
                .FirstOrDefaultAsync(f => f.Id == formationId);

            if (formation == null) return NotFound("Formation non trouvée");
            if (formation.FinalQuizId == null) return BadRequest("Aucun quiz final associé à cette formation");

            // Vérifier si l'utilisateur a déjà passé ce quiz
            var previousAttemptQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == user.Id && a.QuizId == formation.FinalQuizId);

            // Si un sessionId est fourni, filtrer par session
            if (sessionId.HasValue)
            {
                previousAttemptQuery = previousAttemptQuery.Where(a => a.SessionId == sessionId.Value);
            }

            var previousAttempt = await previousAttemptQuery
                .OrderByDescending(a => a.CreatedAt)
                .FirstOrDefaultAsync();

            // Déterminer si l'utilisateur peut passer le quiz
            bool canTakeQuiz = true;

            // Si l'utilisateur a déjà passé le quiz et l'a réussi, il ne peut pas le repasser
            if (previousAttempt != null && previousAttempt.HasPassed)
            {
                canTakeQuiz = false;
            }

            // Si un sessionId est fourni, vérifier que la session est active
            if (sessionId.HasValue && canTakeQuiz)
            {
                var session = await _repositoryWrapper.Session.GetAllAsQueryable()
                    .FirstOrDefaultAsync(s => s.Id == sessionId.Value);

                if (session != null)
                {
                    var now = DateTime.UtcNow;
                    var sessionStartDate = session.StartDate;
                    var sessionEndDate = session.EndDate;
                    bool sessionIsActive = DateOnly.FromDateTime(now) >= sessionStartDate && DateOnly.FromDateTime(now) <= sessionEndDate;

                    // L'utilisateur ne peut passer le quiz que si la session est active
                    canTakeQuiz = canTakeQuiz && sessionIsActive;
                }
                else
                {
                    return NotFound("Session non trouvée");
                }
            }

            // Vérifier si l'utilisateur peut passer le quiz final sans avoir complété tous les modules
            if (!formation.CanPassFinalWithoutModules && canTakeQuiz)
            {
                // Récupérer tous les modules avec quiz
                var modulesWithQuiz = formation.Modules.Where(m => m.QuizId.HasValue).ToList();

                if (modulesWithQuiz.Any())
                {
                    // Vérifier si l'utilisateur a réussi tous les quiz des modules
                    foreach (var module in modulesWithQuiz)
                    {
                        // Vérifier si l'utilisateur a réussi le quiz de ce module
                        var moduleQuizAttemptQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                            .Where(a => a.UserId == user.Id && a.QuizId == module.QuizId && a.AttemptType == AttemptType.Module);

                        // Si un sessionId est fourni, filtrer par session
                        if (sessionId.HasValue)
                        {
                            moduleQuizAttemptQuery = moduleQuizAttemptQuery.Where(a => a.SessionId == sessionId.Value);
                        }

                        var moduleQuizAttempt = await moduleQuizAttemptQuery
                            .OrderByDescending(a => a.CreatedAt)
                            .FirstOrDefaultAsync();

                        // Si l'utilisateur n'a pas réussi le quiz de ce module, il ne peut pas passer le quiz final
                        if (moduleQuizAttempt == null || !moduleQuizAttempt.HasPassed)
                        {
                            canTakeQuiz = false;
                            break;
                        }
                    }
                }
            }

            // Construire la réponse
            var response = new FinalQuizEligibilityDto
            {
                CanTakeQuiz = canTakeQuiz,
                QuizId = formation.FinalQuizId.Value,
                FormationTitle = formation.Title,
                PreviousAttempt = previousAttempt == null ? null : new PreviousAttemptDto
                {
                    Id = previousAttempt.Id,
                    Score = previousAttempt.Score ?? 0,
                    CreatedAt = previousAttempt.CreatedAt,
                    PassedStatus = previousAttempt.HasPassed
                }
            };

            return Ok(response);
        }

        /// <summary>
        /// Soumet les réponses d'un utilisateur à un quiz
        /// </summary>
        /// <param name="quizId">ID du quiz</param>
        /// <param name="submitQuizDto">Données de soumission du quiz</param>
        /// <returns>Résultat du quiz</returns>
        [HttpPost("{quizId:int}/submit")]
        [Authorize]
        public async Task<ActionResult<QuizResultDto>> SubmitQuizAnswers(int quizId, [FromBody] SubmitQuizDto submitQuizDto)
        {
            // Récupérer l'utilisateur actuel
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null) return Unauthorized();

            // Récupérer le quiz avec ses questions et réponses
            var quiz = await _repositoryWrapper.Quiz.GetAllAsQueryable()
                .Include(q => q.Questions)
                .ThenInclude(q => q.Answers)
                .FirstOrDefaultAsync(q => q.Id == quizId);

            if (quiz == null) return NotFound("Quiz non trouvé");

            // Variables pour stocker les informations de formation et de session
            Formation formation = null;
            Session session = null;
            Module module = null;
            int sessionId;

            // Traiter différemment selon le type de quiz
            switch (submitQuizDto.AttemptType)
            {
                case AttemptType.Module:
                    // Vérifier les paramètres requis
                    if (!submitQuizDto.FormationId.HasValue || !submitQuizDto.ModuleId.HasValue)
                    {
                        return BadRequest("FormationId et ModuleId sont requis pour les quiz de module");
                    }

                    // Récupérer le module avec sa formation et le quiz final de la formation
                    module = await _repositoryWrapper.Module.GetAllAsQueryable()
                        .Include(m => m.Formation)
                            .ThenInclude(f => f.FinalQuiz)
                        .FirstOrDefaultAsync(m => m.Id == submitQuizDto.ModuleId.Value && m.FormationId == submitQuizDto.FormationId.Value);

                    if (module == null) return NotFound("Module non trouvé");
                    formation = module.Formation;

                    // Si un sessionId est fourni, récupérer la session
                    if (submitQuizDto.SessionId.HasValue)
                    {
                        session = await _repositoryWrapper.Session.GetAllAsQueryable()
                            .FirstOrDefaultAsync(s => s.Id == submitQuizDto.SessionId.Value);

                        if (session == null) return NotFound("Session non trouvée");
                        sessionId = session.Id;
                    }
                    else
                    {
                        // Créer une session temporaire pour stocker les résultats
                        sessionId = 0; // Valeur spéciale pour indiquer qu'il n'y a pas de session
                    }
                    break;

                case AttemptType.Formation:
                    // Vérifier les paramètres requis
                    if (!submitQuizDto.FormationId.HasValue)
                    {
                        return BadRequest("FormationId est requis pour les quiz finaux");
                    }

                    // Récupérer la formation avec son quiz final
                    formation = await _repositoryWrapper.Formation.GetAllAsQueryable()
                        .Include(f => f.FinalQuiz)
                        .FirstOrDefaultAsync(f => f.Id == submitQuizDto.FormationId.Value);

                    if (formation == null) return NotFound("Formation non trouvée");

                    // Si un sessionId est fourni, récupérer la session
                    if (submitQuizDto.SessionId.HasValue)
                    {
                        session = await _repositoryWrapper.Session.GetAllAsQueryable()
                            .FirstOrDefaultAsync(s => s.Id == submitQuizDto.SessionId.Value);

                        if (session == null) return NotFound("Session non trouvée");
                        sessionId = session.Id;
                    }
                    else
                    {
                        // Créer une session temporaire pour stocker les résultats
                        sessionId = 0; // Valeur spéciale pour indiquer qu'il n'y a pas de session
                    }
                    break;

                default:
                    // Cas par défaut - traiter comme un quiz final
                    // Vérifier les paramètres requis
                    if (!submitQuizDto.SessionId.HasValue)
                    {
                        return BadRequest("SessionId est requis");
                    }

                    // Récupérer la session avec sa formation et le quiz final de la formation
                    session = await _repositoryWrapper.Session.GetAllAsQueryable()
                        .Include(s => s.Formation)
                            .ThenInclude(f => f.FinalQuiz)
                        .FirstOrDefaultAsync(s => s.Id == submitQuizDto.SessionId.Value);

                    if (session == null) return NotFound("Session non trouvée");
                    formation = session.Formation;
                    sessionId = session.Id;

                    // Définir le type de quiz comme Formation pour la suite du traitement
                    submitQuizDto.AttemptType = AttemptType.Formation;
                    break;
            }

            // Vérifier si l'utilisateur a déjà passé ce quiz
            var existingAttemptQuery = _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == user.Id && a.QuizId == quizId);

            // Filtrer par session si nécessaire
            if (sessionId > 0)
            {
                existingAttemptQuery = existingAttemptQuery.Where(a => a.SessionId == sessionId);
            }

            var existingAttempt = await existingAttemptQuery
                .OrderByDescending(a => a.CreatedAt)
                .FirstOrDefaultAsync();

            // Vérifier si l'utilisateur peut passer le quiz
            if (existingAttempt != null && existingAttempt.HasPassed)
            {
                return BadRequest("Vous avez déjà réussi ce quiz et ne pouvez pas le repasser");
            }

            // Calculer le score
            double totalQuestions = quiz.Questions.Count;
            double correctAnswers = 0;

            // Créer une nouvelle tentative de quiz
            var attempt = new UserQuizAttempt
            {
                UserId = user.Id,
                QuizId = quizId,
                SessionId = sessionId,
                StartTime = DateTime.UtcNow,
                AttemptedAt = DateTime.UtcNow,
                IsCompleted = true,
                AttemptType = submitQuizDto.AttemptType,
                ModuleId = submitQuizDto.AttemptType == AttemptType.Module ? submitQuizDto.ModuleId : null,
                QuestionResponses = new List<UserQuestionResponse>()
            };

            // Vérifier chaque réponse
            foreach (var answer in submitQuizDto.Answers)
            {
                var question = quiz.Questions.FirstOrDefault(q => q.Id == answer.QuestionId);
                if (question == null) continue;

                // Enregistrer la réponse de l'utilisateur
                var response = new UserQuestionResponse
                {
                    UserQuizAttempt = attempt,
                    QuestionId = question.Id,
                    SelectedAnswerIds = new List<int> { answer.SelectedAnswerId }
                };
                attempt.QuestionResponses.Add(response);

                // Vérifier si la réponse est correcte
                var correctAnswer = question.Answers.FirstOrDefault(a => a.IsCorrect);
                if (correctAnswer != null && correctAnswer.Id == answer.SelectedAnswerId)
                {
                    correctAnswers++;
                }
            }

            // Calculer le score en pourcentage
            double scorePercentage = (correctAnswers / totalQuestions) * 100;

            // Déterminer si l'utilisateur a réussi (seuil de 70%)
            bool passed = scorePercentage >= 70;

            // Mettre à jour les informations de la tentative
            attempt.Score = scorePercentage;
            attempt.HasPassed = passed;

            // Enregistrer la tentative dans la base de données
            await _repositoryWrapper.QuizAttempt.Create(attempt);

            // Vérifier si c'est vraiment le quiz final de la formation
            bool isFinalQuiz = formation.FinalQuizId.HasValue && formation.FinalQuizId.Value == quizId;

            // Créer une certification uniquement si l'utilisateur a réussi le quiz final de la formation
            if (passed && isFinalQuiz && sessionId > 0)
            {
                // Créer la certification
                var certification = new Certification
                {
                    UserId = user.Id,
                    SessionId = sessionId,
                    Description = $"Certification pour {formation.Title}" + (session != null ? $" - {session.Title}" : ""),
                    Score = scorePercentage,
                    CreatedAt = DateTime.UtcNow
                };

                await _repositoryWrapper.Certifications.Create(certification);

                // Envoyer une notification de félicitations uniquement pour le quiz final
                await _notificationService.SendNotificationAsync(
                    userId: user.Id,
                    title: "Félicitations pour votre certification !",
                    body: $"Vous avez réussi le test final de la formation \"{formation.Title}\" avec un score de {scorePercentage:F1}%. Votre certification est maintenant disponible.",
                    type: NotificationType.Success,
                    actionUrl: $"/condidat/certification/{certification.Id}"
                );
            }
            // Ne pas envoyer de notifications pour les quiz qui ne sont pas le quiz final de la formation
            else if (passed && isFinalQuiz)
            {
                // Envoyer une notification de félicitations uniquement pour le quiz final
                await _notificationService.SendNotificationAsync(
                    userId: user.Id,
                    title: "Félicitations !",
                    body: $"Vous avez réussi le test final avec un score de {scorePercentage:F1}%.",
                    type: NotificationType.Success,
                    actionUrl: $"/condidat/formations/{formation.Id}"
                );
            }
            else if (!passed && isFinalQuiz)
            {
                // Envoyer une notification d'encouragement uniquement pour le quiz final
                await _notificationService.SendNotificationAsync(
                    userId: user.Id,
                    title: "Résultat de votre test final",
                    body: $"Vous avez obtenu un score de {scorePercentage:F1}% au test final. Continuez vos efforts et réessayez !",
                    type: NotificationType.Warning,
                    actionUrl: $"/condidat/formations/{formation.Id}"
                );
            }
            // Pour tous les autres quiz (modules, etc.), ne pas envoyer de notification

            // Retourner le résultat
            return Ok(new QuizResultDto
            {
                Score = scorePercentage,
                Passed = passed,
                AttemptId = attempt.Id,
                AttemptType = attempt.AttemptType,
                ModuleId = attempt.ModuleId,
                FormationId = formation?.Id
            });
        }
    }
}