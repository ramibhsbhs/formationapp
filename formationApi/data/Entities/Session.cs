using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("Sessions")]
    public class Session : BaseEntity
	{
        public string Title { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }

        public int FormationId { get; set; }
        public Formation Formation { get; set; }
    }
}

