using System;

namespace formationApi.dtos.response
{
    public class QuizEligibilityDto
    {
        public bool CanTakeQuiz { get; set; }
        public int QuizId { get; set; }
        public string FormationTitle { get; set; }
        public string SessionTitle { get; set; }
        public PreviousAttemptDto PreviousAttempt { get; set; }
    }

    public class PreviousAttemptDto
    {
        public int Id { get; set; }
        public double Score { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool PassedStatus { get; set; }
    }
}
