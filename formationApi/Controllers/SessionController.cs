
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using formationApi.services.NotificationService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace formationApi.Controllers
{
    public class SessionController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;
        private readonly ILogger<SessionController> _logger;
        private readonly INotificationService _notificationService;

        public SessionController(IRepositoryWrapper repositoryWrapper, ILogger<SessionController> logger, INotificationService notificationService)
        {
            _repositoryWrapper = repositoryWrapper;
            _logger = logger;
            _notificationService = notificationService;
        }

        public async Task<ICollection<Session>> findAll()
        {
            return await _repositoryWrapper.Session.GetAll();
        }

        /// <summary>
        /// Create a new session (Admin only)
        /// </summary>
        [Authorize(Roles = "Administrator")]
        [HttpPost]
        public async Task<ActionResult> CreateSession([FromBody] CreateSessionDto sessionDto)
        {


            var formationExists = await _repositoryWrapper.Formation.Get(id: sessionDto.FormationId.Value);
            if (formationExists == null)
                return BadRequest("Formation not found.");
            // Check if the new session conflicts with any existing session
            var conflictingSessions = await _repositoryWrapper.Session.GetAllAsQueryable()
                .Where(s => s.FormationId == formationExists.Id &&
                            ((sessionDto.StartDate.Value >= s.StartDate && sessionDto.StartDate.Value < s.EndDate) ||
                             (sessionDto.EndDate.Value > s.StartDate && sessionDto.EndDate.Value <= s.EndDate)))
                .ToListAsync();

            if (conflictingSessions.Any())
            {
                return BadRequest("The new session conflicts with an existing session.");
            }
            // Create new session
            var session = new Session
            {
                Title = sessionDto.Title,
                StartDate = sessionDto.StartDate.Value,
                EndDate = sessionDto.EndDate.Value,
                FormationId = formationExists.Id
            };

            await _repositoryWrapper.Session.Create(session);
            var groups = await _repositoryWrapper.Group.GetAllAsQueryable()
                 .Include(g => g.Users)
                 .Include(g => g.Formations)
                  .Where(g => g.Formations.Any(f => f.Id == formationExists.Id))
                 .ToListAsync();

            foreach (var group in groups)
            {
                foreach (var user in group.Users)
                {
                    await _notificationService.SendNotificationAsync(
                         userId: user.Id,
                         title: "New Session Created",
                         body: $"A new session titled '{session.Title}' has been created in your formation."
                     );
                }
            }
            return CreatedAtAction(nameof(findAll), new { id = session.Id }, session);
        }

        private async Task NotifyUsersInFormation(int formationId, string title)
        {
            var groups = await _repositoryWrapper.Group.GetAllAsQueryable()
                 .Include(g => g.Users)
                 .Include(g => g.Formations)
                 //  .Where(g => g.Formations.Any(f => f.Id == formationId))
                 .ToListAsync();

            _logger.LogInformation($"Found {groups.Count} groups in formation {formationId}.");
            var gorup2 = groups;
            foreach (var group in groups)
            {
                foreach (var user in group.Users)
                {
                    await _notificationService.SendNotificationAsync(
                         userId: user.Id,
                         title: "New Session Created",
                         body: $"A new session titled '{title}' has been created in your formation."
                     );
                }
            }
        }

        /// <summary>
        /// Update an existing session (Admin only)
        /// </summary>
        [Authorize(Roles = "Administrator")]
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateSession(int id, [FromBody] UpdateSessionDto sessionDto)
        {

            var session = await _repositoryWrapper.Session.Get(id);
            if (session == null)
                return NotFound("Session not found.");



            // Update fields if provided in the DTO
            session.Title = sessionDto.Title ?? session.Title;
            session.StartDate = sessionDto.StartDate ?? session.StartDate;
            session.EndDate = sessionDto.EndDate ?? session.EndDate;

            await _repositoryWrapper.Session.Update(session);

            return Ok(session);
        }

        /// <summary>
        /// Delete a session (Admin only)
        /// </summary>
        //[Authorize(Roles = "Administrator")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteSession(int id)
        {
            // Fetch the session to delete
            var session = await _repositoryWrapper.Session.Get(id);
            if (session == null)
                return NotFound("Session not found.");

            await _repositoryWrapper.Session.Delete(session.Id);

            return NoContent();
        }
    }
}

