using formationApi.data.Entities;

namespace formationApi.data.Repositories.QuizattempRepo
{
    public class QuizAttemptRepository : BaseRepository<UserQuizAttempt>, IQuizAttemptRepository
    {
        public QuizAttemptRepository(ApplicationContext dbContextFactory) : base(dbContextFactory)
        {
        }
    }
}