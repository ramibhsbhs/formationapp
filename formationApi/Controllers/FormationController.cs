using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace formationApi.Controllers
{
	public class FormationController : BaseApiController
	{
		private readonly IRepositoryWrapper _repositoryWrapper;

        public FormationController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }


        public async Task<ICollection<Formation>> FindAll()
        {
            return await _repositoryWrapper.Formation.GetAll();
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> CreateFormation([FromBody] FormationCreateDto formationCreateDto)
        {
           
            var formation = new Formation
            {
                Title = formationCreateDto.Title,
                Description = formationCreateDto.Description,
                Content = formationCreateDto.Content,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            await _repositoryWrapper.Formation.Create(formation);

            return CreatedAtAction(nameof(CreateFormation), new { id = formation.Id }, formation);
        }
    }
}

