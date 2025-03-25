using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace formationApi.Controllers
{
    public class ModuleController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;

        public ModuleController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        public async Task<ICollection<Module>> findAll()
        {
            return await _repositoryWrapper.Module.GetAll();
        }
        /// <summary>
        /// Create a new module within a formation (Admin only)
        /// </summary>
        /// <param name="moduleDto">The module details including attachments</param>
        /// <returns>The created module</returns>
        [Authorize(Roles = "Administrator")]
        [HttpPost]
        public async Task<object> CreateModuleAsync([FromBody] CreateModuleDto moduleDto)
        {

            // Validate formation
            var formation = await _repositoryWrapper.Formation.Get(moduleDto.FormationId);
            if (formation == null)
                return NotFound($"Formation with ID {moduleDto.FormationId} not found.");

            var modules = await _repositoryWrapper.Module.GetAllByFormationId(formation.Id);

            if (modules.Any(m => m.Position == moduleDto.Position))
                return BadRequest($"A module with position {moduleDto.Position} already exists in this formation.");

            var module = new Module
            {
                Discription = moduleDto.Description,
                Title = moduleDto.Title,
                Position = moduleDto.Position,
                FormationId = formation.Id,
                Attachments = new List<Attachment>()
            };

            // Save the Module to the database to generate its Id
            var createdModule = await _repositoryWrapper.Module.Create(module);

            if (moduleDto.Attachments != null && moduleDto.Attachments.Any())
            {
                foreach (var attachmentDto in moduleDto.Attachments)
                {
                    var attachment = new Attachment
                    {
                        Lien = attachmentDto.Lien,
                        Type = attachmentDto.Type,
                        ModuleId = createdModule.Id, // Use the generated Id
                        UpdatedAt = DateTime.Now.ToUniversalTime()
                    };
                    await _repositoryWrapper.Attachment.Create(attachment);
                    createdModule.Attachments.Add(attachment);
                }
            }

            return createdModule;
        }
    }


    

}