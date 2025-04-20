using System;
using System.ComponentModel.DataAnnotations.Schema;
using formationApi.data.models;

namespace formationApi.data.Entities
{
    [Table("groups")]
    public class Group : BaseEntity
	{
        public string Name { get; set; }
        public ICollection<AppUser> Users { get; set; } = new List<AppUser>();

        public ICollection<Formation> Formations { get; set; } = new List<Formation>();
    }
}

