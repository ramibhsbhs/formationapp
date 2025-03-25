using System;
using System.ComponentModel.DataAnnotations.Schema;
using formationApi.data.models;

namespace formationApi.data.Entities
{
    [Table("notifications")]
    public class Notification : BaseEntity
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime Date { get; set; }
        public bool Received { get; set; } 
        public int UserId { get; set; } 
        public AppUser User { get; set; }
    }

}