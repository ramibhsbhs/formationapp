using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class UpdateFormationModulesDto
    {
        [Required]
        public List<ModuleDto> Modules { get; set; } = new List<ModuleDto>();

        public class ModuleDto
        {
            public int? Id { get; set; } // Null pour les nouveaux modules

            [Required(ErrorMessage = "Description is required.")]
            public string Description { get; set; }

            [Required(ErrorMessage = "Title is required.")]
            public string Title { get; set; }

            [Range(1, int.MaxValue, ErrorMessage = "Position must be a positive integer.")]
            public int Position { get; set; }

            [Range(0, int.MaxValue, ErrorMessage = "QuizId must be a valid quiz ID.")]
            public int? QuizId { get; set; }

            [Range(0, int.MaxValue, ErrorMessage = "MaxAttempts must be a non-negative integer. Use 0 for unlimited attempts.")]
            public int MaxAttempts { get; set; } = 3;

            public bool Enable { get; set; } = true;
        }
    }
}
