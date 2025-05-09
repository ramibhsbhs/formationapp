using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class UpdateUserProfileRequest
    {
        [Required(ErrorMessage = "Le nom d'utilisateur est requis")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "L'email est requis")]
        [EmailAddress(ErrorMessage = "Format d'email invalide")]
        public string Email { get; set; }

        public IFormFile? ProfileImage { get; set; }
    }
}
