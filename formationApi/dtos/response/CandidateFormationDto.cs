using formationApi.data.Entities;
using static formationApi.dtos.response.FormationDto;

namespace formationApi.dtos.response
{
    public class CandidateFormationDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public int? QuizId { get; set; }
        public QuizDto Quiz { get; set; }
        public bool FinalQuizPassed { get; set; } = false; // Indique si l'utilisateur a réussi le quiz final
        public bool CanPassFinalWithoutModules { get; set; } = false; // Indique si l'utilisateur peut passer le quiz final sans avoir réussi tous les modules
        public List<CandidateFormationSessionDto> Sessions { get; set; }
        public ICollection<CondidatFormationModuleDto> Modules { get; set; } = new List<CondidatFormationModuleDto>();
    }

    public class CandidateFormationSessionDto
    {
        public int SessionId { get; set; }
        public string SessionTitle { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }

        public bool HasAttempted { get; set; }
        public double? Score { get; set; }
        public bool CanRepass { get; set; }
    }

    public class CondidatFormationModuleDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Position { get; set; }
        public int? QuizId { get; set; }
        public QuizDto Quiz { get; set; }
        public int MaxAttempts { get; set; } = 3; // Nombre de tentatives autorisées pour le quiz du module
        public ICollection<AttachmentDto> Attachments { get; set; } = new List<AttachmentDto>();
    }


    public static class CandidateFormationDtoMaperr
    {
        public static CondidatFormationModuleDto FromModule(this Module module)
        {
            return new CondidatFormationModuleDto
            {
                Id = module.Id,
                Title = module.Title,
                Description = module.Description,
                Position = module.Position,
                QuizId = module.QuizId,
                Quiz = module.Quiz.ToDto(),
                MaxAttempts = module.MaxAttempts,
                Attachments = module.Attachments.ToDtos()
            };



        }
        public static ICollection<CondidatFormationModuleDto> FromModules(this ICollection<Module> modules)
        {
            return modules.Select(m => m.FromModule()).ToList();
        }


    }
}