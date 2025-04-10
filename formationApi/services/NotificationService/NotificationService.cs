using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.SignalR;
using Microsoft.AspNetCore.SignalR;

namespace formationApi.services.NotificationService
{
	public class NotificationService : INotificationService
    {
        private readonly IHubContext<PresenceHub> _hubContext;
        private readonly PresenceTracker _presenceTracker;
        private readonly IRepositoryWrapper _repositoryWrapper;

        public NotificationService(IHubContext<PresenceHub> hubContext, PresenceTracker presenceTracker, IRepositoryWrapper repositoryWrapper)
        {
            _hubContext = hubContext;
            _presenceTracker = presenceTracker;
            _repositoryWrapper = repositoryWrapper;
        }

        public async Task SendNotificationAsync(int userId, string title, string body)
        {
            var notification = new Notification
            {
                UserId = userId,
                Title = title,
                Body = body,
                Date = DateTime.UtcNow,
                Received = false 
            };
            var connectionIds = await _presenceTracker.GetConnectionsForUser(userId);
            if (connectionIds.Any())
            {
                
                await _hubContext.Clients.Clients(connectionIds)
                    .SendAsync("ReceiveNotification",notification);
                notification.Received = true; 
            }

            await _repositoryWrapper.Notification.Create(notification);
        }
    }
}

