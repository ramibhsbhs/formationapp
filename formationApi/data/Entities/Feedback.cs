using System;
using System.ComponentModel.DataAnnotations.Schema;
using formationApi.data.models;

namespace formationApi.data.Entities
{
    [Table("feedbacks")]
    public class Feedback :BaseEntity
	{
        public string Description { get; set; }
        public double Value { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; }

        // New fields for formation
        public int FormationId { get; set; }
        public Formation Formation { get; set; }
    }
}

