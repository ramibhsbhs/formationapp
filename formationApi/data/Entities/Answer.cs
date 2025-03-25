namespace formationApi.data.Entities
{
    public class Answer : BaseEntity
    {
        public string Text { get; set; }
        public bool IsCorrect { get; set; } = false;
        public int QuestionId { get; set; }
        public Question Question { get; set; } = null!;
    }
}

