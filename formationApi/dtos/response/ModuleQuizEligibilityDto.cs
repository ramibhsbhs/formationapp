using System;

namespace formationApi.dtos.response
{
    public class ModuleQuizEligibilityDto
    {
        public bool CanTakeQuiz { get; set; }
        public int QuizId { get; set; }
        public string FormationTitle { get; set; }
        public string ModuleTitle { get; set; }
        public PreviousAttemptDto PreviousAttempt { get; set; }
    }

    public class FinalQuizEligibilityDto
    {
        public bool CanTakeQuiz { get; set; }
        public int QuizId { get; set; }
        public string FormationTitle { get; set; }
        public PreviousAttemptDto PreviousAttempt { get; set; }
    }
}
