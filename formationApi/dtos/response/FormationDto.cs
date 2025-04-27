using System;
using System.Text.Json.Serialization;
using formationApi.data.Entities;
using formationApi.data.models;
using formationApi.dtos.response;
using static formationApi.dtos.response.FormationDto;

namespace formationApi.dtos.response
{
    public class FormationDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Category { get; set; }
        public ICollection<SessionDto> Sessions { get; set; } = new List<SessionDto>();
        public ICollection<ModuleDto> Modules { get; set; } = new List<ModuleDto>();
        public ICollection<int> GroupIds { get; set; } = new List<int>();
        public ICollection<GroupDto> Groups { get; set; } = new List<GroupDto>();
        public ICollection<string> RoleNames { get; set; } = new List<string>();
        public class SessionDto
        {
            public int Id { get; set; }
            public string Title { get; set; } = string.Empty;
            public DateOnly StartDate { get; set; }
            public DateOnly EndDate { get; set; }
        }

        public class ModuleDto
        {
            public int Id { get; set; }
            public string Title { get; set; } = string.Empty;
            public string Description { get; set; } = string.Empty;
            public int Position { get; set; }
            public ICollection<AttachmentDto> Attachments { get; set; } = new List<AttachmentDto>();
        }

        public class AttachmentDto
        {
            public int Id { get; set; }
            public string Lien { get; set; } = string.Empty;
            public string Type { get; set; } = string.Empty;
            public int ModuleId { get; set; }
        }
    }

    public static class FormationMapper
    {
        public static FormationDto ToDto(this Formation formation)
        {
            return new FormationDto
            {
                Id = formation.Id,
                Title = formation.Title,
                Description = formation.Description,
                Content = formation.Content,
                Sessions = formation.Sessions?.Select(session => session.ToDto()).ToList() ?? new List<FormationDto.SessionDto>(),
                Modules = formation.Modules?.Select(module => module.ToDto()).ToList() ?? new List<FormationDto.ModuleDto>(),
                GroupIds = formation.Groups?.Select(g => g.Id).ToList() ?? new List<int>(),
                Groups = formation.Groups?.Select(g => g.ToDto()).ToList(),
                RoleNames = formation.Roles?.Select(r => r.Name).ToList() ?? new List<string>(),
                Category = formation.Category,
            };
        }

        public static SessionDto ToDto(this Session session)
        {
            return new SessionDto
            {
                Id = session.Id,
                Title = session.Title,
                StartDate = session.StartDate,
                EndDate = session.EndDate,
            };
        }

        public static ModuleDto ToDto(this Module module)
        {
            return new ModuleDto
            {
                Id = module.Id,
                Title = module.Title,
                Description = module.Description,
                Position = module.Position,
                Attachments = module.Attachments?.Select(attachment => attachment.ToDto()).ToList() ?? new List<FormationDto.AttachmentDto>()
            };
        }

        public static AttachmentDto ToDto(this Attachment attachment)
        {
            return new AttachmentDto
            {
                Id = attachment.Id,
                Lien = attachment.Lien,
                Type = attachment.Type,
                ModuleId = attachment.ModuleId
            };
        }

        public static ICollection<FormationDto> ToDtoList(this IList<Formation> formations)
        {
            return formations.Select(formation => formation.ToDto()).ToArray();
        }
    }
}