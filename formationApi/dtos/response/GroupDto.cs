using System;
using formationApi.data.Entities;
using formationApi.data.models;
using formationApi.dtos.response;

namespace formationApi.dtos.response
{
    public class GroupDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Count { get; set; }
        public ICollection<UserDto> Users { get; set; }
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
            Users = group.Users?.Select(user => user.ToDto()).ToList() ?? new List<UserDto>()
        };
    }

    public static ICollection<GroupDto> ToDtoList(this ICollection<Group> groups)
    {
        return groups.Select(group => group.ToDto()).ToArray();
    }
}

