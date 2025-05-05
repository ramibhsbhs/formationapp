using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class UpdateFormationContentDto
    {
        [Required]
        [MinLength(3)]
        public string Title { get; set; }

        [Required]
        [MinLength(10)]
        public string Description { get; set; }

        [Required]
        public string Content { get; set; }
        [Required]
        public bool CanPassFinalWithoutModules { get; set; }
    }

    public class UpdateFormationCategoryDto
    {
        [Required]
        public string Category { get; set; }
    }

    public class UpdateFormationGroupsDto
    {
        [Required]
        [MinLength(1, ErrorMessage = "At least one group must be selected.")]
        public List<int> GroupIds { get; set; } = new();
    }
}