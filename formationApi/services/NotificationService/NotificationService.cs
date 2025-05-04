using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.SignalR;
using Microsoft.AspNetCore.SignalR;

namespace formationApi.services.NotificationService
{
    public class NotificationService : INotificationService
    {
        private readonly IHubContext<PresenceHub> _hubContext; // class reponsable a envoyee notification en temp reels 
        private readonly PresenceTracker _presenceTracker;  // ou on store les utilisateurs connectees
        private readonly IRepositoryWrapper _repositoryWrapper;

        public NotificationService(IHubContext<PresenceHub> hubContext, PresenceTracker presenceTracker, IRepositoryWrapper repositoryWrapper)
        {
            _hubContext = hubContext;
            _presenceTracker = presenceTracker;
            _repositoryWrapper = repositoryWrapper;
        }

        public async Task SendNotificationAsync(int userId, string title, string body, NotificationType type = NotificationType.Info, string actionUrl = null)
        {
            var notification = new Notification
            {
                UserId = userId,
                Title = title,
                Body = body,
                Date = DateTime.UtcNow,
                Received = false,
                Type = type,
                ActionUrl = actionUrl
            };
            var connectionIds = await _presenceTracker.GetConnectionsForUser(userId);
            if (connectionIds.Any())
            {
                await _hubContext.Clients.Clients(connectionIds)
                    .SendAsync("ReceiveNotification", notification);
                notification.Received = true;
            }

            await _repositoryWrapper.Notification.Create(notification);
        }
    }
}

