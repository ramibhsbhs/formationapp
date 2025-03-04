using System;
using formationApi.data.Entities;
using formationApi.data.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data
{
    public  class SeedData
    {
        public static async Task SaveSeedData(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            var roles = new List<AppRole>
                {
                    new() {Name = "Member"},
                    new() {Name = "Admin"},
                    new() {Name = "Moderator"},
                };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }
            var admin = new AppUser
                {
                    UserName = "admin",
                   
                };
            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin,new List<string>(){"Admin", "Moderator"});
        }
    }
}

