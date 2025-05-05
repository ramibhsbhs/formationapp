using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("Modules")]
    public class Module : BaseEntity
    {
        public string Description { get; set; }
        public string Title { get; set; }
        public int Position { get; set; }
        public int FormationId { get; set; }
        public Formation Formation { get; set; }
        public ICollection<Attachment> Attachments { get; set; } = new List<Attachment>();


        // New fields for module quiz
        public int? QuizId { get; set; }
        public Quiz Quiz { get; set; }

        // Nombre de tentatives autorisées pour le quiz du module (0 = illimité)
        public int MaxAttempts { get; set; } = 1;
    }
}

