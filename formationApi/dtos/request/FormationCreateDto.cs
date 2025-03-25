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
    }
}

