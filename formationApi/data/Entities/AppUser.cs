using System;
using formationApi.data.Entities;
using Microsoft.AspNetCore.Identity;

namespace formationApi.data.models
{
    public class AppUser : IdentityUser<int>
    {
        public string? ImageUrl { get; set; } = null;

        public int? GroupId { get; set; }
        public Group Group { get; set; }


        public ICollection<AppUserRole> UserRoles { get; set; } = new List<AppUserRole>();
        public ICollection<Notification> Notifications { get; set; } = new List<Notification>();
        public ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();
    }
}

