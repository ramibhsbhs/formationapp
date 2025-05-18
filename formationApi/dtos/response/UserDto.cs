using System;
using formationApi.data.Entities;
using formationApi.data.models;

namespace formationApi.dtos.response
{
    public class UserDto
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public int? GroupId { get; set; }
        public string? GroupName { get; set; }
        public List<string> Roles { get; set; } = new List<string>();
        public bool IsActive { get; set; } = true;
    }

    public static class UserMapper
    {
        public static UserDto ToDto(this AppUser user)
        {
            return new UserDto
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
                ImageUrl = user.ImageUrl,
                GroupId = user.GroupId,
                GroupName = user.Group?.Name,
                Roles = user.UserRoles?.Select(ur => ur.Role.Name).ToList() ?? new List<string>(),
                IsActive = user.LockoutEnd == null || user.LockoutEnd < DateTimeOffset.UtcNow
            };
        }

        public static ICollection<UserDto> ToDtoList(this ICollection<AppUser> users)
        {
            return users.Select(user => user.ToDto()).ToList();
        }
    }
}
