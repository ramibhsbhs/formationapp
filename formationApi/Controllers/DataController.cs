using formationApi.data.Repositories;

namespace formationApi.Controllers
{
    public class DataController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;

        public DataController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        // public async Task GetDashboardDataAsync()
        // {
        //     var users = await _repositoryWrapper.UserManager.Users.CountAsync();
        //     var formations = _repositoryWrapper.Formation.Count(); // Assuming a Count() method exists
        //     var sessions = _repositoryWrapper.Session.Count();
        //     var modules = _repositoryWrapper.Module.Count();
        //     var groups = _repositoryWrapper.Group.Count();
        //     var feedbacks = _repositoryWrapper.Feedback.Count();
        //     var certifications = _repositoryWrapper.Certifications.Count();
        //     var quizzes = _repositoryWrapper.Quiz.Count();
        //     var attempts = _repositoryWrapper.QuizAttempt.Count();

        //     return new 
        //     {
        //         TotalUsers = users,
        //         TotalFormations = formations,
        //         TotalSessions = sessions,
        //         TotalModules = modules,
        //         TotalGroups = groups,
        //         TotalFeedbacks = feedbacks,
        //         TotalCertifications = certifications,
        //         TotalQuizzes = quizzes,
        //         TotalQuizAttempts = attempts
        //     };
        // }
    }
}