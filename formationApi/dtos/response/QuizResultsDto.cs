

using formationApi.data.Entities;

namespace formationApi.dtos.response
{
    public class FormationResultsDto
    {
        public int FormationId { get; set; }
        public string FormationTitle { get; set; }
        public List<QuizAttemptDto> Attempts { get; set; } = new List<QuizAttemptDto>();
        public List<SessionResultsDto> SessionResults { get; set; } = new List<SessionResultsDto>();
    }

    public class SessionResultsDto
    {
        public int SessionId { get; set; }
        public string SessionTitle { get; set; }
        public List<QuizAttemptDto> Attempts { get; set; } = new List<QuizAttemptDto>();
    }

    public class QuizAttemptDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int QuizId { get; set; }
        public int SessionId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime AttemptedAt { get; set; }
        public bool IsCompleted { get; set; }
        public double Score { get; set; }
        public bool HasPassed { get; set; }
        public DateTime CreatedAt { get; set; }

        // Type de tentative (Module ou Formation)
        public AttemptType AttemptType { get; set; } = AttemptType.Module;

        // ID du module associé (si AttemptType = Module)
        public int? ModuleId { get; set; }

        // Informations sur l'utilisateur, le quiz et la session
        public UserDto User { get; set; }
        public QuizBasicDto Quiz { get; set; }
        public SessionBasicDto Session { get; set; }
        public ModuleBasicDto Module { get; set; }
        public List<QuestionResponseDto> QuestionResponses { get; set; } = new List<QuestionResponseDto>();
    }

    public class QuestionResponseDto
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public List<int> SelectedAnswerIds { get; set; } = new List<int>();
        public QuestionWithAnswersDto Question { get; set; }
    }

    public class QuestionWithAnswersDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<AnswerDto> Answers { get; set; } = new List<AnswerDto>();
    }

    public class AnswerDto
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
    }

    public class QuizBasicDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }

    public class SessionBasicDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public FormationBasicDto Formation { get; set; }
    }

    public class ModuleBasicDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Position { get; set; }
        public FormationBasicDto Formation { get; set; }
    }

    public class FormationBasicDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
