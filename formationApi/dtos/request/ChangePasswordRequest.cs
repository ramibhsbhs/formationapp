using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class ChangePasswordRequest
    {
        [Required(ErrorMessage = "Le mot de passe actuel est requis")]
        public string CurrentPassword { get; set; }

        [Required(ErrorMessage = "Le nouveau mot de passe est requis")]
        [MinLength(6, ErrorMessage = "Le mot de passe doit contenir au moins 6 caractères")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "La confirmation du mot de passe est requise")]
        [Compare("NewPassword", ErrorMessage = "Les mots de passe ne correspondent pas")]
        public string ConfirmPassword { get; set; }
    }
}
