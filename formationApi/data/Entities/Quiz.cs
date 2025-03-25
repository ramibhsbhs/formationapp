using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("quizs")]
    public class Quiz :BaseEntity
	{
        public string Title { get; set; }
        public ICollection<Question> Questions { get; set; } = new List<Question>();
    }
}

