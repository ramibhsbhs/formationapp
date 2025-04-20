using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.data.Repositories.FormationRepo;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace formationApi.Controllers
{
    public class GroupController : BaseApiController
    {
        private readonly IRepositoryWrapper _repositoryWrapper;

        public GroupController(IRepositoryWrapper repository)
        {
            _repositoryWrapper = repository;
        }

        /// <summary>
        /// Get all groups
        /// </summary>
        /// <returns>A list of all groups</returns>
        [HttpGet]
        public async Task<ActionResult<ICollection<Group>>> GetAllGroups()
        {
            var groups = await _repositoryWrapper.Group.GetAllWithUsers();
            return Ok(groups.ToDtoList());
        }

        /// <summary>
        /// Get all groups
        /// </summary>
        /// <returns>A list of all groups</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Group>> Get(int id)
        {
            return Ok(await _repositoryWrapper.Group.Get(id));
        }
        /// <summary>
        /// Create a new group (Admin only)
        /// </summary>
        /// <param name="groupDto">The group details</param>
        /// <returns>The created group</returns>
        [Authorize(Roles = "Administrator")]
        [HttpPost]
        public async Task<ActionResult> CreateGroup([FromBody] CreateGroupDto groupDto)
        {
            if (string.IsNullOrWhiteSpace(groupDto.Name))
                return BadRequest("Group name is required.");

            var group = new Group
            {
                Name = groupDto.Name
            };

            foreach (var userId in groupDto.Users)
            {
                var user = await _repositoryWrapper.UserManager.FindByIdAsync(userId.ToString());
                if (user != null)
                {
                    user.GroupId = group.Id;
                    user.Group = group;
                    group.Users.Add(user);
                    var result = await _repositoryWrapper.UserManager.UpdateAsync(user);
                }

            }

            await _repositoryWrapper.Group.Create(group);
            return CreatedAtAction(nameof(GetAllGroups), new { id = group.Id }, group);
        }

        /// <summary>
        /// Add users to an existing group (Admin only)
        /// </summary>
        /// <param name="groupId">The ID of the group</param>
        /// <param name="userIds">List of user IDs to add to the group</param>
        /// <returns>The updated group</returns>
        [Authorize(Roles = "Administrator")]
        [HttpPut("{groupId}/users")]
        public async Task<ActionResult> AddUsersToGroup(int groupId, [FromBody] ICollection<int> userIds)
        {
            if (userIds == null || !userIds.Any())
                return BadRequest("At least one user ID is required.");

            var group = await _repositoryWrapper.Group.GetAllWithUsers()
                .ContinueWith(t => t.Result.FirstOrDefault(g => g.Id == groupId));
            if (group == null)
                return NotFound($"Group with ID {groupId} not found.");

            var failedUsers = new List<string>();
            foreach (var userId in userIds)
            {
                var user = await _repositoryWrapper.UserManager.FindByIdAsync(userId.ToString());
                if (user == null)
                {
                    failedUsers.Add($"User with ID {userId} not found.");
                    continue;
                }

                // Skip if user is already in the group
                if (user.GroupId == groupId)
                {
                    continue;
                }

                user.GroupId = groupId;
                user.Group = group; // Optional: Set navigation property
                group.Users.Add(user);

                var result = await _repositoryWrapper.UserManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    failedUsers.Add($"Failed to update user {userId}: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                }
            }

            if (failedUsers.Any())
            {
                return BadRequest(new { Message = "Some users could not be added.", Errors = failedUsers });
            }

            await _repositoryWrapper.Group.Update(group);
            return Ok(group.ToDto());
        }

        /// <summary>
        /// Remove users from an existing group (Admin only)
        /// </summary>
        /// <param name="groupId">The ID of the group</param>
        /// <param name="userIds">List of user IDs to remove from the group</param>
        /// <returns>The updated group</returns>
        [Authorize(Roles = "Administrator")]
        [HttpDelete("{groupId}/users")]
        public async Task<ActionResult> RemoveUsersFromGroup(int groupId, [FromBody] ICollection<int> userIds)
        {
            if (userIds == null || !userIds.Any())
                return BadRequest("At least one user ID is required.");

            var group = await _repositoryWrapper.Group.GetAllWithUsers()
                .ContinueWith(t => t.Result.FirstOrDefault(g => g.Id == groupId));
            if (group == null)
                return NotFound($"Group with ID {groupId} not found.");

            var failedUsers = new List<string>();
            foreach (var userId in userIds)
            {
                var user = await _repositoryWrapper.UserManager.FindByIdAsync(userId.ToString());
                if (user == null)
                {
                    failedUsers.Add($"User with ID {userId} not found.");
                    continue;
                }

                // Skip if user is not in the group
                if (user.GroupId != groupId)
                {
                    continue;
                }

                user.GroupId = null;
                user.Group = null; // Optional: Clear navigation property
                group.Users.Remove(user);

                var result = await _repositoryWrapper.UserManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    failedUsers.Add($"Failed to update user {userId}: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                }
            }

            if (failedUsers.Any())
            {
                return BadRequest(new { Message = "Some users could not be removed.", Errors = failedUsers });
            }

            await _repositoryWrapper.Group.Update(group);
            return Ok(group.ToDto());
        }
    }
}



