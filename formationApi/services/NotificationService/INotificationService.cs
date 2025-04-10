using System;
namespace formationApi.services.NotificationService
{
    public interface INotificationService
    {
        Task SendNotificationAsync(int userId, string title, string body);
    }
}

