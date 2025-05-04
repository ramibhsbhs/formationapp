using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    public class SubmitQuizDto
    {
        [Required]
        public int SessionId { get; set; }

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
