using System;
using formationApi.data.models;
using formationApi.data.Repositories.AttachmentRepo;
using formationApi.data.Repositories.CertificationRepo;
using formationApi.data.Repositories.feedbackRepo;
using formationApi.data.Repositories.FormationRepo;
using formationApi.data.Repositories.GroupRepo;
using formationApi.data.Repositories.ModuleRepo;
using formationApi.data.Repositories.NotificationRepo;
using formationApi.data.Repositories.QuizattempRepo;
using formationApi.data.Repositories.QuizsRepo;
using formationApi.data.Repositories.SessionRepo;
using Microsoft.AspNetCore.Identity;

namespace formationApi.data.Repositories
{
    public interface IRepositoryWrapper
    {
        IFormationRepository Formation { get; }
        ISessionRepository Session { get; }
        IGroupRepository Group { get; }
        UserManager<AppUser> UserManager { get; }
        IModuleRepository Module { get; }
        IAttachmentRepository Attachment { get; }
        INotificationRepository Notification { get; }
        IQuizRepository Quiz { get; }
        IQuestionRepository Question { get; }
        IAnswerRepository Answer { get; }
        IFeedbackRepository Feedback { get; }
        IQuizAttemptRepository QuizAttempt { get; }

        ICertificationRepository Certifications { get; }


    }
}

