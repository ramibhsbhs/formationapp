using formationApi.data.Entities;
using static formationApi.dtos.response.GroupDto;

namespace formationApi.dtos.response
{
    public class CertificationDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public double Score { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public CertificationSessionDto Session { get; set; }

        public UserDto User { get; set; } = new UserDto();
    }
    public class CertificationSessionDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public Object Formation { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }


    }
    public static class CertificationMapper
    {

        public static CertificationDto toDto(this Certification certification)
        {
            return new CertificationDto
            {
                Id = certification.Id,
                Description = certification.Description,
                Score = certification.Score,
                CreatedAt = certification.CreatedAt,
                UpdatedAt = certification.UpdatedAt,
                Session = new CertificationSessionDto
                {
                    Id = certification.Session.Id,
                    Title = certification.Session.Title,
                    StartDate = certification.Session.StartDate,
                    EndDate = certification.Session.EndDate,
                    Formation = new
                    {
                        Id = certification.Session.Formation.Id,
                        Title = certification.Session.Formation.Title,
                        Description = certification.Session.Formation.Description,
                    }
                },
                User = certification.User.ToDto()

            };
        }

        public static IEnumerable<CertificationDto> toDtos(this IEnumerable<Certification> certifications)
        {
            return certifications.Select(c => c.toDto()).ToList();
        }
    }
}