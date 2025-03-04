using System;
using formationApi.data.Entities;
using Microsoft.AspNetCore.Identity;

namespace formationApi.data.models
{
	public class AppUser : IdentityUser<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; } = new List<AppUserRole>();
    }
}

