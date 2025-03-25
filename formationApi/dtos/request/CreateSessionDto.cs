using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class CreateSessionDto : IValidatableObject
    {
        [Required(ErrorMessage = "Title is required.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please add EndDate to the request.")]
        [DataType(DataType.Date)]
        public DateOnly? StartDate { get; set; }

        [Required(ErrorMessage = "Please add EndDate to the request.")]
        [DataType(DataType.Date)]
        public DateOnly? EndDate { get; set; }

        [Required(ErrorMessage = "FormationId is required.")]
        public int? FormationId { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (EndDate.Value <= StartDate.Value)
            {
                yield return new ValidationResult("End date must be greater than the start date.", new[] { "EndDate" });
            }
        }
    }
}

