using System;
using formationApi.data.Entities;
using formationApi.data.models;
using formationApi.dtos.response;
using static formationApi.dtos.response.GroupDto;

namespace formationApi.dtos.response
{
    public class GroupDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public List<UserDto> Administrators { get; set; } = new();
        public List<UserDto> HierarchicalLeaders { get; set; } = new();
        public List<UserDto> TeamLeaders { get; set; } = new();
        public List<UserDto> PostLeaders { get; set; } = new();
        public List<UserDto> QualityAgents { get; set; } = new();
        public List<UserDto> Managers { get; set; } = new();
        public List<UserDto> Employees { get; set; } = new();
        public int GroupUsersCount { get; set; }
        public class UserDto
        {
            public int Id { get; set; }
            public string UserName { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
            public string? ImageUrl { get; set; }
        }
    }

}

public static class GroupMapper
{
    public static GroupDto ToDto(this Group group)
    {
        return new GroupDto
        {
            Id = group.Id,
            Name = group.Name,
            CreatedAt = group.CreatedAt,
            UpdatedAt = group.UpdatedAt,
            GroupUsersCount = group.Users.Count(),
            Administrators = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "Administrator"))
                                        .Select(u => u.ToDto()).ToList() ?? new(),
            HierarchicalLeaders = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "HierarchicalLeader"))
                                              .Select(u => u.ToDto()).ToList() ?? new(),
            TeamLeaders = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "TeamLeader"))
                                      .Select(u => u.ToDto()).ToList() ?? new(),
            PostLeaders = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "PostLeader"))
                                      .Select(u => u.ToDto()).ToList() ?? new(),
            QualityAgents = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "QualityAgent"))
                                        .Select(u => u.ToDto()).ToList() ?? new(),
            Managers = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "Manager"))
                                  .Select(u => u.ToDto()).ToList() ?? new(),
            Employees = group.Users?.Where(u => u.UserRoles.Any(r => r.Role.Name == "Employee"))
                                    .Select(u => u.ToDto()).ToList() ?? new()
        };
    }

    public static UserDto ToDto(this AppUser user)
    {
        return new UserDto
        {
            Id = user.Id,
            UserName = user.UserName,
            Email = user.Email,
            ImageUrl = user.ImageUrl
        };
    }
    public static ICollection<GroupDto> ToDtoList(this ICollection<Group> groups)
    {
        return groups.Select(group => group.ToDto()).ToArray();
    }
}

