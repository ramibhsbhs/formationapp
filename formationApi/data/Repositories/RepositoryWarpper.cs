using System;
using formationApi.data.models;
using formationApi.data.Repositories.AttachmentRepo;
using formationApi.data.Repositories.CertificationRepo;
using formationApi.data.Repositories.feedbackRepo;
using formationApi.data.Repositories.GroupRepo;
using formationApi.data.Repositories.ModuleRepo;
using formationApi.data.Repositories.NotificationRepo;
using formationApi.data.Repositories.QuizattempRepo;
using formationApi.data.Repositories.QuizsRepo;
using formationApi.data.Repositories.SessionRepo;
using Microsoft.AspNetCore.Identity;

namespace formationApi.data.Repositories.FormationRepo
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly ApplicationContext _context;
        private readonly UserManager<AppUser> _userManager;
        private IFormationRepository _formation;
        private ISessionRepository _session;
        private IModuleRepository _module;
        private IAttachmentRepository _attachmentRepository;
        private IGroupRepository _group;
        private INotificationRepository _notification;
        private IQuizRepository _quiz;
        private IQuestionRepository _question;
        private IAnswerRepository _answer;
        private IFeedbackRepository _feedback;
        private IQuizAttemptRepository _quizAttempt;

        private ICertificationRepository _certification;


        public RepositoryWrapper(ApplicationContext context, UserManager<AppUser> userManager)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _userManager = userManager;
        }

        public UserManager<AppUser> UserManager => _userManager;

        public IFormationRepository Formation => _formation ??= new FormationRepository(_context);

        public ISessionRepository Session => _session ??= new SessionRepository(_context);

        public IGroupRepository Group => _group ??= new GroupRepository(_context);

        public IAttachmentRepository Attachment => _attachmentRepository ??= new AttatchmentRepository(_context);

        public IModuleRepository Module => _module ??= new ModuleRepository(_context);

        public INotificationRepository Notification => _notification ??= new NotificationRepository(_context);

        public IQuizRepository Quiz => _quiz ??= new QuizRepository(_context);

        public IQuestionRepository Question => _question ??= new QuestionRepository(_context);

        public IAnswerRepository Answer => _answer ??= new AnswerRepository(_context);

        public IFeedbackRepository Feedback => _feedback ??= new FeedbackRepository(_context);

        public IQuizAttemptRepository QuizAttempt => _quizAttempt ??= new QuizAttemptRepository(_context);

        public ICertificationRepository Certifications => _certification ??= new CertificationRepository(_context);
    }
}

