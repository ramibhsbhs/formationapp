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
        public int Count { get; set; }
        public ICollection<UserDto> Users { get; set; }
        public class UserDto
        {
            public int Id { get; set; }
            public string UserName { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
            public string? ImageUrl { get; set; }

            public List<string> Roles { get; set; } = new List<string>();
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
            Count = group.Users.Count(),
            Users = group.Users?.Select(user => user.ToDto()).ToList() ?? new List<GroupDto.UserDto>()

        };
    }

    public static UserDto ToDto(this AppUser user)
    {
        return new UserDto
        {
            Id = user.Id,
            UserName = user.UserName,
            Email = user.Email,
            ImageUrl = user.ImageUrl,
            Roles = user.UserRoles.Select(role => role.Role.Name).ToList()
        };
    }
    public static ICollection<GroupDto> ToDtoList(this ICollection<Group> groups)
    {
        return groups.Select(group => group.ToDto()).ToArray();
    }
}

