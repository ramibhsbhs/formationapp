using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class CreateCertificationDto
    {
        [Range(1, int.MaxValue)]
        public int UserId { get; set; }

        [Required]
        [Range(0.0, 100.0, ErrorMessage = "Score must be between 0 and 100.")]
        public double Score { get; set; }
        [Range(1, int.MaxValue)]
        public int SessionId { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Description { get; set; }
    }
}