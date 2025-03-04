using System;
using formationApi.data.models;
using Microsoft.AspNetCore.Identity;

namespace formationApi.data.Entities
{
    public class AppUserRole : IdentityUserRole<int>
    {
        public AppUser User { get; set; } = null!;
        public AppRole Role { get; set; } = null!;
    }
}

