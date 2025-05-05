using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class SubmitQuizDto
    {
        // SessionId est requis pour les quiz de session, mais optionnel pour les quiz de module et finaux
        public int? SessionId { get; set; }

        // Champs pour les quiz de module
        public int? FormationId { get; set; }
        public int? ModuleId { get; set; }

        // Type de quiz : "session", "module", ou "final"
        public string QuizType { get; set; } = "session";

        [Required]
        public List<QuizAnswerDto> Answers { get; set; } = new List<QuizAnswerDto>();
    }

    public class QuizAnswerDto
    {
        [Required]
        public int QuestionId { get; set; }

        [Required]
        public int SelectedAnswerId { get; set; }
    }
}
