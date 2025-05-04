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

            // Récupérer la session
            var session = await _repositoryWrapper.Session.GetAllAsQueryable()
                .Include(s => s.Formation)
                .FirstOrDefaultAsync(s => s.Id == submitQuizDto.SessionId);

            if (session == null) return NotFound("Session non trouvée");

            // Vérifier si l'utilisateur a déjà passé ce quiz pour cette session
            var existingAttempt = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                .Where(a => a.UserId == user.Id && a.SessionId == submitQuizDto.SessionId && a.QuizId == quizId)
                .OrderByDescending(a => a.CreatedAt)
                .FirstOrDefaultAsync();

            // Vérifier si l'utilisateur peut passer le quiz
            if (existingAttempt != null)
            {
                return BadRequest("Vous avez déjà passé ce quiz pour cette session et ne pouvez pas le repasser");
            }

            // Calculer le score
            double totalQuestions = quiz.Questions.Count;
            double correctAnswers = 0;

            // Créer une nouvelle tentative de quiz
            var attempt = new UserQuizAttempt
            {
                UserId = user.Id,
                QuizId = quizId,
                SessionId = submitQuizDto.SessionId,
                StartTime = DateTime.UtcNow,
                AttemptedAt = DateTime.UtcNow,
                IsCompleted = true,
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

            // Créer une certification si l'utilisateur a réussi
            if (passed)
            {
                // Créer la certification
                var certification = new Certification
                {
                    UserId = user.Id,
                    SessionId = submitQuizDto.SessionId,
                    Description = $"Certification pour {session.Formation.Title} - {session.Title}",
                    Score = scorePercentage,
                    CreatedAt = DateTime.UtcNow
                };

                await _repositoryWrapper.Certifications.Create(certification);

                // Envoyer une notification de félicitations
                await _notificationService.SendNotificationAsync(
                    userId: user.Id,
                    title: "Félicitations pour votre certification !",
                    body: $"Vous avez réussi le test de la formation \"{session.Formation.Title}\" avec un score de {scorePercentage:F1}%. Votre certification est maintenant disponible.",
                    type: NotificationType.Success,
                    actionUrl: $"/condidat/certification/{certification.Id}"
                );
            }
            else
            {
                // Envoyer une notification d'encouragement
                await _notificationService.SendNotificationAsync(
                    userId: user.Id,
                    title: "Résultat de votre test",
                    body: $"Vous avez obtenu un score de {scorePercentage:F1}% au test de la formation \"{session.Formation.Title}\". Continuez vos efforts et réessayez !",
                    type: NotificationType.Warning,
                    actionUrl: $"/condidat/validate-quiz/{submitQuizDto.SessionId}"
                );
            }

            // Retourner le résultat
            return Ok(new QuizResultDto
            {
                Score = scorePercentage,
                Passed = passed,
                AttemptId = attempt.Id
            });
        }
    }
}