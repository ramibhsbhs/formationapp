using formationApi.data.Entities;

namespace formationApi.dtos.response
{
    public class QuizResultDto
    {
        public double Score { get; set; }
        public bool Passed { get; set; }
        public int AttemptId { get; set; }
        public AttemptType AttemptType { get; set; }
        public int? ModuleId { get; set; }
        public int? FormationId { get; set; }
    }
}
