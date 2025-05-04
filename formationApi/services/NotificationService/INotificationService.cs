using System;
using formationApi.data.Entities;

namespace formationApi.services.NotificationService
{
    public interface INotificationService
    {
        Task SendNotificationAsync(int userId, string title, string body, NotificationType type = NotificationType.Info, string actionUrl = null);
    }
}

