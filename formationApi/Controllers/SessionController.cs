
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace formationApi.Controllers
{
	public class SessionController  : BaseApiController
	{
		private readonly IRepositoryWrapper _repositoryWrapper;


        public SessionController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
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
        public async Task<ActionResult> CreateSession( [FromBody] CreateSessionDto sessionDto)
        {
           

            var formationExists = await _repositoryWrapper.Formation.Get(id: sessionDto.FormationId.Value);
            if (formationExists == null)
                return BadRequest("Formation not found.");

            var session = new Session
            {
                Title = sessionDto.Title,
                StartDate = sessionDto.StartDate.Value,
                EndDate = sessionDto.EndDate.Value,
                FormationId = formationExists.Id
            };

            await _repositoryWrapper.Session.Create(session);
          
            return CreatedAtAction(nameof(findAll), new { id = session.Id }, session);
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

