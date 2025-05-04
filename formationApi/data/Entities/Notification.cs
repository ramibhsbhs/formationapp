using System;
using System.ComponentModel.DataAnnotations.Schema;
using formationApi.data.models;

namespace formationApi.data.Entities
{
    public enum NotificationType
    {
        Info = 0,
        Success = 1,
        Warning = 2,
        Danger = 3
    }

    [Table("notifications")]
    public class Notification : BaseEntity
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime Date { get; set; }
        public bool Received { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; }

        public NotificationType Type { get; set; } = NotificationType.Info;

        // Nouveau champ pour l'URL d'action (nullable)
        public string ActionUrl { get; set; }
    }
}