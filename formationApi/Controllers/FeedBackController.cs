using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using formationApi.dtos.response;
using formationApi.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace formationApi.Controllers
{
    [Authorize]
    public class FeedBackController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;

        public FeedBackController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        /// <summary>
        /// Récupère tous les feedbacks (accessible uniquement aux administrateurs)
        /// </summary>
        [HttpGet]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<IEnumerable<FeedbackDto>>> GetAllFeedbacks()
        {
            var feedbacks = await _repositoryWrapper.Feedback
                .GetAllAsQueryable()
                .Include(f => f.User)
                .Include(f => f.Formation)
                .ToListAsync();

            return Ok(feedbacks.ToDtos());
        }

        /// <summary>
        /// Récupère tous les feedbacks par administrateur
        /// </summary>
        [HttpGet("admin")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<IEnumerable<FeedbackDto>>> GetAllByAdmin()
        {
            var feedbacks = await _repositoryWrapper.Feedback
                .GetAllAsQueryable()
                .Include(f => f.User)
                .Include(f => f.Formation)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return Ok(feedbacks.ToDtos());
        }

        /// <summary>
        /// Récupère tous les feedbacks d'un utilisateur spécifique
        /// </summary>
        [HttpGet("user")]
        public async Task<ActionResult<IEnumerable<FeedbackDto>>> GetByUser()
        {
            var userId = User.GetUserId();
            var feedbacks = await _repositoryWrapper.Feedback
                .GetAllAsQueryable()
                .Where(f => f.UserId == userId)
                .Include(f => f.Formation)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return Ok(feedbacks.ToDtos());
        }

        /// <summary>
        /// Récupère un feedback par son ID
        /// </summary>
        [HttpGet("{id:int}")]
        public async Task<ActionResult<FeedbackDto>> GetById(int id)
        {
            var feedback = await _repositoryWrapper.Feedback
                .GetAllAsQueryable()
                .Include(f => f.User)
                .Include(f => f.Formation)
                .FirstOrDefaultAsync(f => f.Id == id);

            if (feedback == null)
            {
                return NotFound("Feedback non trouvé");
            }

            return Ok(feedback.ToDto());
        }

        /// <summary>
        /// Récupère tous les feedbacks pour une formation spécifique
        /// </summary>
        [HttpGet("formation/{formationId:int}")]
        public async Task<ActionResult<IEnumerable<FeedbackDto>>> GetByFormation(int formationId)
        {
            var formation = await _repositoryWrapper.Formation.Get(formationId);
            if (formation == null)
            {
                return NotFound("Formation non trouvée");
            }

            var feedbacks = await _repositoryWrapper.Feedback
                .GetAllAsQueryable()
                .Where(f => f.FormationId == formationId)
                .Include(f => f.User)
                .OrderByDescending(f => f.CreatedAt)
                .ToListAsync();

            return Ok(feedbacks.ToDtos());
        }

        /// <summary>
        /// Crée un nouveau feedback
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<FeedbackDto>> CreateFeedback([FromBody] CreateFeedbackDto createFeedbackDto)
        {
            var userId = User.GetUserId();
            var user = await _repositoryWrapper.UserManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return BadRequest("Utilisateur non trouvé");
            }

            var formation = await _repositoryWrapper.Formation.Get(createFeedbackDto.FormationId);
            if (formation == null)
            {
                return BadRequest("Formation non trouvée");
            }

            var feedback = new Feedback
            {
                Description = createFeedbackDto.Description,
                Value = createFeedbackDto.Value,
                UserId = userId,
                User = user,
                FormationId = createFeedbackDto.FormationId,
                Formation = formation
            };

            await _repositoryWrapper.Feedback.Create(feedback);

            return CreatedAtAction(nameof(GetById), new { id = feedback.Id }, feedback.ToDto());
        }

        /// <summary>
        /// Supprime un feedback (accessible uniquement aux administrateurs)
        /// </summary>
        [HttpDelete("{id:int}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult> DeleteFeedback(int id)
        {
            var feedback = await _repositoryWrapper.Feedback.Get(id);
            if (feedback == null)
            {
                return NotFound("Feedback non trouvé");
            }

            await _repositoryWrapper.Feedback.Delete(id);
            return NoContent();
        }
    }
}