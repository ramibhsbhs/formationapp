using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("Formations")]
    public class Formation :BaseEntity
	{
        public string Title { get; set; } 
        public string Description { get; set; }
        public string Content { get; set; }
        public string Category { get; set; } = "safety";
        public ICollection<Group> Groups { get; set; } = new List<Group>();
        public ICollection<Session> Sessions { get; set; } = new List<Session>();

        public ICollection<Module> Modules { get; set; } = new List<Module>();

    }
}

