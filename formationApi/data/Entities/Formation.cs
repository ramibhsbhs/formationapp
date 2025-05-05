using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("Formations")]
    public class Formation : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public ICollection<Group> Groups { get; set; } = new List<Group>();
        public ICollection<Session> Sessions { get; set; } = new List<Session>();

        public ICollection<Module> Modules { get; set; } = new List<Module>();

        public ICollection<AppRole> Roles { get; set; } = new List<AppRole>();


        // New fields for final quiz
        public int? FinalQuizId { get; set; }
        public Quiz FinalQuiz { get; set; }

        // Indique si l'utilisateur peut passer le quiz final même si tous les quiz de module ne sont pas réussis
        public bool CanPassFinalWithoutModules { get; set; } = false;

    }
}

