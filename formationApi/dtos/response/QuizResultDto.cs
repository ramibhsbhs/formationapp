namespace formationApi.dtos.response
{
    public class QuizResultDto
    {
        public double Score { get; set; }
        public bool Passed { get; set; }
        public int AttemptId { get; set; }
    }
}
