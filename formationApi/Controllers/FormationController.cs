using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using formationApi.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static formationApi.dtos.request.FormationCreateDto;

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
                UpdatedAt = DateTime.UtcNow,
                Sessions = new List<Session>(),
                Modules = new List<Module>()
            };

            // Fetch groups from DB by their IDs
            if (formationCreateDto.GroupIds != null && formationCreateDto.GroupIds.Any())
            {
                var validGroups = new List<Group>();

                foreach (var groupId in formationCreateDto.GroupIds)
                {
                    var group = await _repositoryWrapper.Group.Get(groupId);
                    if (group != null)
                    {
                        validGroups.Add(group);
                    }
                }

                formation.Groups = validGroups;
            }
            await _repositoryWrapper.Formation.Create(formation);

            var sessions = formationCreateDto.Sessions.Select(sessionDto => new Session
            {
                Title = sessionDto.Title,
                StartDate = sessionDto.StartDate,
                EndDate = sessionDto.EndDate,
                FormationId = formation.Id
            }).ToList();

            if (sessions.Any())
            {
                await _repositoryWrapper.Session.InsertMany(sessions);
            }
            // 3. Create Modules and their Attachments
            var modules = formationCreateDto.Modules.Select(dto => new Module
            {
                Description = dto.Description,
                Title = dto.Title,
                Position = dto.Position,
                FormationId = formation.Id,
             }).ToList();

            if (modules.Any())
            {
                await _repositoryWrapper.Module.InsertMany(modules);
            } 

            
            return CreatedAtAction(nameof(CreateFormation), new { id = formation.Id }, formation);
        }
    }
}

