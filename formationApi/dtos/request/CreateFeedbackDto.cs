using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class CreateFeedbackDto
    {
        public string Description { get; set; }

        [Required(ErrorMessage = "La valeur est requise")]
        [Range(0, 1, ErrorMessage = "La valeur doit être comprise entre 0 et 1")]
        public double Value { get; set; }

        [Required(ErrorMessage = "L'ID de la formation est requis")]
        public int FormationId { get; set; }
    }
}
