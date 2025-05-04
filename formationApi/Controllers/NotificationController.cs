using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.Extensions;
using formationApi.services.NotificationService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace formationApi.Controllers
{
    [Authorize]
    public class NotificationController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;
        private readonly INotificationService _notificationService;

        public NotificationController(IRepositoryWrapper repositoryWrapper, INotificationService notificationService)
        {
            _repositoryWrapper = repositoryWrapper;
            _notificationService = notificationService;
        }

        [HttpGet]
        public async Task<ICollection<Notification>> findAll()
        {
            return await _repositoryWrapper.Notification.GetAll();
        }


        // api/notification/user
        [HttpGet("user")]
        public async Task<IActionResult> GetUserNotifications()
        {
            var userId = User.GetUserId();
            var notifications = await _repositoryWrapper.Notification.GetAllAsQueryable()
                .Where(n => n.UserId == userId)
                .OrderByDescending(n => n.Date)
                .ToListAsync();

            return Ok(notifications);
        }       

        // api/notification/read-all
        [HttpPut("read-all")]
        public async Task<IActionResult> MarkAllAsRead()
        {
            var userId = User.GetUserId();
            var notifications = await _repositoryWrapper.Notification.GetAllAsQueryable()
                .Where(n => n.UserId == userId && !n.Received)
                .ToListAsync();

            foreach (var notification in notifications)
            {
                notification.Received = true;
                await _repositoryWrapper.Notification.Update(notification);
            }

            return Ok();
        }

        [HttpPost("{userId}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> SendNotification(int userId, [FromBody] SendNotificationRequest request)
        {
            if (string.IsNullOrEmpty(request.Title) || string.IsNullOrEmpty(request.Body))
            {
                return BadRequest("Le titre et le corps de la notification sont requis");
            }

            await _notificationService.SendNotificationAsync(userId, request.Title, request.Body);

            return Ok();
        }
    }

    public class SendNotificationRequest
    {
        public string Title { get; set; }
        public string Body { get; set; }
    }
}

