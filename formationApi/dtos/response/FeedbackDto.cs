using formationApi.data.Entities;
using formationApi.dtos.response;

namespace formationApi.dtos.response
{
    public class FeedbackDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public double Value { get; set; }
        public int UserId { get; set; }
        public UserDto User { get; set; }
        public int FormationId { get; set; }
        public FormationInfoDto Formation { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public class FormationInfoDto
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
        }
    }

    public static class FeedbackMapper
    {
        public static FeedbackDto ToDto(this Feedback feedback)
        {
            return new FeedbackDto
            {
                Id = feedback.Id,
                Description = feedback.Description,
                Value = feedback.Value,
                UserId = feedback.UserId,
                User = feedback.User.ToDto(),
                FormationId = feedback.FormationId,
                Formation = feedback.Formation != null ? new FeedbackDto.FormationInfoDto
                {
                    Id = feedback.Formation.Id,
                    Title = feedback.Formation.Title,
                    Description = feedback.Formation.Description
                } : null,
                CreatedAt = feedback.CreatedAt,
            };
        }

        public static IEnumerable<FeedbackDto> ToDtos(this IEnumerable<Feedback> feedbacks)
        {
            return feedbacks.Select(f => f.ToDto()).ToList();
        }
    }
}
