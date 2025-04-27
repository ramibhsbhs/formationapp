using formationApi.data.Entities;

namespace formationApi.data.Repositories.feedbackRepo
{
    public class FeedbackRepository : BaseRepository<Feedback>, IFeedbackRepository
    {
        public FeedbackRepository(ApplicationContext dbContextFactory) : base(dbContextFactory)
        {
        }
    }
}