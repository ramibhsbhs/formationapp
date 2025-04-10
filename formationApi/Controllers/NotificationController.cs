using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.services.NotificationService;
using Microsoft.AspNetCore.Mvc;

namespace formationApi.Controllers
{
	public class NotificationController : BaseApiController
	{
		private readonly IRepositoryWrapper _repositoryWrapper;
        private readonly INotificationService _notificationService;

        public NotificationController(IRepositoryWrapper repositoryWrapper, INotificationService notificationService)
        {
            _repositoryWrapper = repositoryWrapper;
            _notificationService = notificationService;
        }

        public async Task<ICollection<Notification>> findAll()
        {
            return await _repositoryWrapper.Notification.GetAll();
        }

        [HttpPost("{userId}")]
        public async Task sendNotification(int userId)
        {
            await _notificationService
                    .SendNotificationAsync(userId,"test","body");
        }
        
    }
}

