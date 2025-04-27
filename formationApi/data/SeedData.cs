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
                new AppRole { Name = UserRole.Administrator.ToString() },        
                new AppRole { Name = UserRole.HierarchicalLeader.ToString() },  
                new AppRole { Name = UserRole.TeamLeader.ToString() }  ,
                new AppRole { Name = UserRole.PostLeader.ToString() }  ,
                new AppRole { Name = UserRole.QualityAgent.ToString() }  ,
                new AppRole { Name = UserRole.Manager.ToString() }  ,

            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }
            var admin = new AppUser
                {
                    UserName = "admin",
                    Email = "admin@gmail.com"
                   
                };
            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin,new List<string>() { "Administrator"});
        }
    }
}

