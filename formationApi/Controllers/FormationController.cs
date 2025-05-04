using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.dtos.request;
using formationApi.dtos.response;
using formationApi.Extensions;
using formationApi.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static formationApi.dtos.request.FormationCreateDto;

namespace formationApi.Controllers
{
    public class FormationController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;
        private readonly RoleManager<AppRole> _roleManager;

        public FormationController(IRepositoryWrapper repositoryWrapper, RoleManager<AppRole> roleManager)
        {
            _repositoryWrapper = repositoryWrapper;
            _roleManager = roleManager;
        }

        public async Task<ICollection<FormationDto>> FindAll()
        {
            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null)
                return new List<FormationDto>();

            var userRoles = await _repositoryWrapper.UserManager.GetRolesAsync(user);
            var isAdmin = userRoles.Contains("Administrator") || userRoles.Contains("Manager");
            var isHierarchicalLeader = userRoles.Contains("HierarchicalLeader");
            var isTeamLeader = userRoles.Contains("TeamLeader");
            var isPostLeader = userRoles.Contains("PostLeader");

            var formations = await _repositoryWrapper.Formation.GetAll();

            if (isAdmin)
            {
                // Admin sees all formations
                // return formations.ToDtoList();
                var result = await _repositoryWrapper.Formation.GetAllAsQueryable()
                         .Include(f => f.Sessions.Where(s => s.Enable))
                         .Include(f => f.Groups.Where(g => g.Enable))
                         .ThenInclude(g => g.Users)
                         .Include(f => f.Roles)
                         .Include(f => f.Modules.Where(m => m.Enable))
                         .ThenInclude(m => m.Attachments.Where(a => a.Enable))
                         .ToListAsync();
                return result.ToDtoList();

            }
            else if (isHierarchicalLeader)
            {
                // HierarchicalLeader sees formations assigned to their groups
                var userGroup = await _repositoryWrapper.Group.Get(user.GroupId ?? 0);
                if (userGroup == null)
                    return new List<FormationDto>();

                formations = formations.Where(f => f.Groups.Contains(userGroup)).ToList();
                return formations.ToDtoList();
            }
            else if (isTeamLeader || isPostLeader)
            {
                // TeamLeader and PostLeader see formations where their role is required and their group is assigned
                var roleName = isTeamLeader ? "TeamLeader" : "PostLeader";
                formations = formations.Where(f =>
                    f.Roles.Any(r => r.Name == roleName) &&
                    f.Groups.Any(g => g.Users.Any(u => u.Id == user.Id))
                ).ToList();
                return formations.ToDtoList();
            }

            return new List<FormationDto>();
        }
        [HttpGet("condidat")]
        public async Task<ActionResult<ICollection<CandidateFormationDto>>> FindFormationsForCandidate()
        {
            if (!User.IsCandidate())
            {
                return Forbid();
            }

            var user = await _repositoryWrapper.UserManager.GetUserAsync(User);
            if (user == null)
                return new List<CandidateFormationDto>();

            var userRoles = await _repositoryWrapper.UserManager.GetRolesAsync(user);
            var isCandidate = userRoles.Contains("TeamLeader") || userRoles.Contains("PostLeader");

            if (!isCandidate)
                return new List<CandidateFormationDto>();

            // Get formations where the role is required and user is part of the group
            var formations = await _repositoryWrapper.Formation.GetAllAsQueryable()
                                .Include(f => f.Sessions)
                                .Include(f => f.Groups)
                                .ThenInclude(g => g.Users)
                                .Include(f => f.Roles)
                                .Include(f => f.Modules)
                                .ThenInclude(m => m.Attachments)
                                .ToListAsync();

            var userFormations = formations
                .Where(f => f.Roles.Any(r => r.Name == "TeamLeader" || r.Name == "PostLeader") &&
                            f.Groups.Any(g => g.Users.Any(u => u.Id == user.Id)))
                .ToList();
            var userQuizAttempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                               .Where(a => a.UserId == user.Id)
                               .ToListAsync();
            var candidateFormations = new List<CandidateFormationDto>();

            foreach (var formation in userFormations)
            {
                var formationDto = new CandidateFormationDto
                {
                    Id = formation.Id,
                    Title = formation.Title,
                    Description = formation.Description,
                    Content = formation.Content,
                    Category = formation.Category,
                    QuizId = formation.FinalQuizId,
                    Modules = formation.Modules.FromModules(),
                    Sessions = new List<CandidateFormationSessionDto>()
                };

                foreach (var session in formation.Sessions)
                {
                    var attempt = userQuizAttempts
                                    .FirstOrDefault(a => a.SessionId == session.Id);

                    var sessionDto = new CandidateFormationSessionDto
                    {
                        SessionId = session.Id,
                        SessionTitle = session.Title,
                        StartDate = session.StartDate,
                        EndDate = session.EndDate,
                        HasAttempted = attempt != null,
                        Score = attempt?.Score,
                        CanRepass = attempt == null || (!attempt.HasPassed && attempt.IsCompleted)
                    };

                    formationDto.Sessions.Add(sessionDto);
                }

                candidateFormations.Add(formationDto);
            }

            return Ok(candidateFormations);
        }

        [HttpGet("condidat/{id}")]
        public async Task<ActionResult<CandidateFormationDto>> FindFormationForCandidate(int id)
        {
            // Use the new method that only includes enabled sessions and modules
            var formation = await _repositoryWrapper.Formation.GetFormationWithEnabledItemsAsync(id);

            if (formation == null)
            {
                return NotFound();
            }
            var userQuizAttempts = await _repositoryWrapper.QuizAttempt.GetAllAsQueryable()
                              .Where(a => a.UserId == User.GetUserId())
                              .ToListAsync();
            var formationDto = new CandidateFormationDto
            {
                Id = formation.Id,
                Title = formation.Title,
                Description = formation.Description,
                Content = formation.Content,
                Category = formation.Category,
                QuizId = formation.FinalQuizId,
                Modules = formation.Modules.FromModules(),
                Sessions = new List<CandidateFormationSessionDto>()
            };

            foreach (var session in formation.Sessions)
            {
                var attempt = userQuizAttempts
                                .FirstOrDefault(a => a.SessionId == session.Id);

                var sessionDto = new CandidateFormationSessionDto
                {
                    SessionId = session.Id,
                    SessionTitle = session.Title,
                    StartDate = session.StartDate,
                    EndDate = session.EndDate,
                    HasAttempted = attempt != null,
                    Score = attempt?.Score,
                    CanRepass = attempt == null || (!attempt.HasPassed && attempt.IsCompleted)
                };

                formationDto.Sessions.Add(sessionDto);
            }

            return Ok(formationDto);
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> CreateFormation([FromBody] FormationCreateDto formationCreateDto)
        {

            var finalQuiz = await _repositoryWrapper.Quiz.Get(formationCreateDto.FinalQuizId.Value);
            if (finalQuiz == null)
            {
                return BadRequest($"Final quiz with ID {formationCreateDto.FinalQuizId.Value} does not exist.");
            }
            var formation = new Formation
            {
                Title = formationCreateDto.Title,
                Description = formationCreateDto.Description,
                Content = formationCreateDto.Content,
                Category = formationCreateDto.Category,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                Sessions = new List<Session>(),
                Modules = new List<Module>(),
                FinalQuiz = finalQuiz,
            };

            // Add roles using RoleManager
            foreach (var roleName in formationCreateDto.Roles.Distinct())
            {
                var role = await _roleManager.FindByNameAsync(roleName);
                if (role != null)
                {
                    formation.Roles.Add(role);
                }
            }



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
                QuizId = dto.QuizId,
            }).ToList();

            if (modules.Any())
            {
                await _repositoryWrapper.Module.InsertMany(modules);
            }


            return CreatedAtAction(nameof(CreateFormation), new { id = formation.Id }, formation);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> DeleteFormation(int id)
        {
            var formation = await _repositoryWrapper.Formation.Get(id);
            if (formation == null)
            {
                return NotFound();
            }
            await _repositoryWrapper.Formation.Delete(formation.Id);
            return NoContent();
        }

        [HttpPut("{id}/content")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> UpdateFormationContent(int id, [FromBody] UpdateFormationContentDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var formation = await _repositoryWrapper.Formation.Get(id);
            if (formation == null)
                return NotFound();

            formation.Title = dto.Title;
            formation.Description = dto.Description;
            formation.Content = dto.Content;
            formation.UpdatedAt = DateTime.UtcNow;

            await _repositoryWrapper.Formation.Update(formation);
            return Ok(formation.ToDto());
        }

        [HttpPut("{id}/category")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> UpdateFormationCategory(int id, [FromBody] UpdateFormationCategoryDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var formation = await _repositoryWrapper.Formation.Get(id);
            if (formation == null)
                return NotFound();

            formation.Category = dto.Category;
            formation.UpdatedAt = DateTime.UtcNow;

            await _repositoryWrapper.Formation.Update(formation);
            return Ok(formation.ToDto());
        }

        [HttpPut("{id}/groups")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> UpdateFormationGroups(int id, [FromBody] UpdateFormationGroupsDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var formation = await _repositoryWrapper.Formation.Get(id);
            if (formation == null)
                return NotFound();

            var validGroups = new List<Group>();
            foreach (var groupId in dto.GroupIds)
            {
                var group = await _repositoryWrapper.Group.Get(groupId);
                if (group != null)
                {
                    validGroups.Add(group);
                }
            }

            formation.Groups = validGroups;
            formation.UpdatedAt = DateTime.UtcNow;

            await _repositoryWrapper.Formation.Update(formation);
            return Ok(formation.ToDto());
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetFormation(int id)
        {
            // Use the new method that only includes enabled sessions and modules
            var formation = await _repositoryWrapper.Formation.GetFormationWithEnabledItemsAsync(id);

            if (formation == null)
            {
                return NotFound();
            }

            return Ok(formation.ToDto());
        }

    }
}




