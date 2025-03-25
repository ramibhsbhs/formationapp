using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("questions")]
    public class Question : BaseEntity
    {
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public int Points { get; set; }
        public int Order { get; set; }
        public ICollection<Answer> Answers { get; set; } = new List<Answer>();
    }
}

