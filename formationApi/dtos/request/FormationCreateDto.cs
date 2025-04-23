using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class FormationCreateDto
    {
        [Required(ErrorMessage = "Title is required.")]
        [MinLength(10, ErrorMessage = "Title cannot be longer than 10 characters.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        [MinLength(10, ErrorMessage = "Description cannot be longer than 500 characters.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Content is required.")]
        public string Content { get; set; }
        
        [Required(ErrorMessage = "Category is required.")]
        public string Category { get; set; } = "safety";

        public List<int> GroupIds { get; set; } = new List<int>();

        public List<SessionDto> Sessions { get; set; } = new List<SessionDto>();

        public List<ModuleDto> Modules { get; set; } = new List<ModuleDto>();

        public class SessionDto : IValidatableObject
        {
            [Required(ErrorMessage = "Title is required.")]
            public string Title { get; set; }

            [Required(ErrorMessage = "Please add EndDate to the request.")]
            [DataType(DataType.Date)]
            public DateOnly StartDate { get; set; }

            [Required(ErrorMessage = "Please add EndDate to the request.")]
            [DataType(DataType.Date)]
            public DateOnly EndDate { get; set; }

            [Required(ErrorMessage = "FormationId is required.")]
            public int? FormationId { get; set; }

            public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
            {
                if (EndDate <= StartDate)
                {
                    yield return new ValidationResult("End date must be greater than the start date.", new[] { "EndDate" });
                }
            }
        }

        public class ModuleDto
        {
            [Required(ErrorMessage = "Description is required.")]
            public string Description { get; set; }

            [Required(ErrorMessage = "Title is required.")]
            public string Title { get; set; }

            [Range(1, int.MaxValue, ErrorMessage = "Position must be a positive integer.")]
            public int Position { get; set; }


            public ICollection<CreateAttachmentDto> Attachments { get; set; } = new List<CreateAttachmentDto>();


            public sealed class CreateAttachmentDto
            {
                [Required(ErrorMessage = "Lien is required.")]
                [Url(ErrorMessage = "Lien must be a valid URL (http or https).")]
                public string Lien { get; set; }

                [Required(ErrorMessage = "Type is required.")]
                [RegularExpression("^(pdf|video|image|doc)$", ErrorMessage = "Type must be one of: pdf, video, image, doc.")]
                public string Type { get; set; }
            }
        }
    }


}

