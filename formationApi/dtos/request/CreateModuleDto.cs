using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
	public class CreateModuleDto
	{
        [Required(ErrorMessage = "Description is required.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Title is required.")]
        public string Title { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Position must be a positive integer.")]
        public int Position { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Position must be a positive integer.")]
        public int FormationId { get; set; }

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

