using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.NotificationRepo
{
    public class NotificationRepository : BaseRepository<Notification>, INotificationRepository
    {
        public NotificationRepository(ApplicationContext dbContextFactory) : base(dbContextFactory)
        {
        }
    }
}

