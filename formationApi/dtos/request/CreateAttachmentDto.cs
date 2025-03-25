using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
	public class CreateAttachmentDto
    {
        [Required]
        public string Lien { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public int? ModuleId { get; set; }
    }
}


