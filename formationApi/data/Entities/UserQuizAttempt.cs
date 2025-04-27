using System.ComponentModel.DataAnnotations.Schema;
using formationApi.data.models;

namespace formationApi.data.Entities
{
    [Table("UserQuizAttempts")]
    public class UserQuizAttempt : BaseEntity
    {
        public int UserId { get; set; }
        public AppUser User { get; set; }
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime? AttemptedAt { get; set; }
        public bool IsCompleted { get; set; }
        public double? Score { get; set; }
        public bool HasPassed { get; set; }

        // Collection of responses for this attempt
        public ICollection<UserQuestionResponse> QuestionResponses { get; set; }
    }

    [Table("UserQuestionResponses")]
    public class UserQuestionResponse
    {
        public int Id { get; set; }
        public int UserQuizAttemptId { get; set; }
        public UserQuizAttempt UserQuizAttempt { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }

        // List of selected answer IDs, stored as JSON in the database
        public List<int> SelectedAnswerIds { get; set; }
    }
}