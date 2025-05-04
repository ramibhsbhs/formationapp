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
    public class CertificationController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;

        public CertificationController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }
        [HttpPost("create")]
        public async Task<ActionResult<Certification>> Create([FromBody] CreateCertificationDto certificationDto)
        {


            var session = await _repositoryWrapper.Session.Get(certificationDto.SessionId);
            if (session == null)
            {
                return BadRequest("Session not found");
            }

            var user = await _repositoryWrapper.UserManager.FindByIdAsync(certificationDto.UserId.ToString());
            if (user == null)
            {
                return BadRequest("User not found");
            }

            var certification = new Certification
            {
                Description = certificationDto.Description,
                Score = certificationDto.Score,
                SessionId = session.Id,
                Session = session,
                UserId = user.Id,
                User = user,
            };

            await _repositoryWrapper.Certifications.Create(certification);
            return Ok(new
            {
                Id = certification.Id,
                Description = certification.Description,
                Score = certification.Score,
                CreatedAt = certification.CreatedAt,
                UpdatedAt = certification.UpdatedAt,
            });
        }
        [HttpGet]
        public async Task<IEnumerable<CertificationDto>> FindAll()
        {
            var certifications = await _repositoryWrapper.Certifications
                .GetAllAsQueryable()
                .Include(c => c.Session)
                .ThenInclude(s => s.Formation)
                .Include(c => c.User)
                .ToListAsync();
            return certifications.toDtos();
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult> FindById(int id)
        {
            var certification = await _repositoryWrapper.Certifications
                .GetAllAsQueryable()
                .Include(c => c.Session)
                .ThenInclude(s => s.Formation)
                .Include(c => c.User)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (certification == null)
            {
                return NotFound();
            }
            return Ok(certification.toDto());
        }
        [HttpGet("user")]
        public async Task<IEnumerable<CertificationDto>> FindByUser(int formationId)
        {
            var userId = User.GetUserId();
            var certifications = await _repositoryWrapper.Certifications
                .GetAllAsQueryable()
                .Where(c => c.UserId == userId)
                .Include(c => c.Session)
                .ThenInclude(s => s.Formation)
                .Include(c => c.User)
                .ToListAsync();
            return certifications.toDtos();
        }




    }
}