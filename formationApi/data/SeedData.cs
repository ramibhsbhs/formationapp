using System;
using formationApi.data.Entities;
using formationApi.data.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data
{
    public class SeedData
    {
        private const string DefaultPassword = "Pa$$w0rd";

        public static async Task SaveSeedData(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager, ApplicationContext context)
        {
            Console.WriteLine("Starting data seeding process...");

            // Seed roles
            await SeedRoles(roleManager);

            // Seed groups
            var groups = await SeedGroups(context);

            // Seed users
            await SeedUsers(userManager, groups);

            Console.WriteLine("Data seeding completed.");
        }

        private static async Task SeedRoles(RoleManager<AppRole> roleManager)
        {
            // Check each role individually and create only if it doesn't exist
            var rolesToCheck = new[]
            {
                UserRole.Administrator.ToString(),
                UserRole.Manager.ToString(),

                //superviseur
                UserRole.HierarchicalLeader.ToString(), // chef hierachitacal 

                //condidat
                UserRole.TeamLeader.ToString(), //  chef de equipe
                UserRole.PostLeader.ToString(), // chef de poste
                UserRole.QualityAgent.ToString(), // agent de qualite
              
            };

            foreach (var roleName in rolesToCheck)
            {
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new AppRole { Name = roleName });
                    Console.WriteLine($"Created role: {roleName}");
                }
            }
        }

        private static async Task<List<Group>> SeedGroups(ApplicationContext context)
        {
            // Get existing groups
            var existingGroups = await context.Groups.ToListAsync();

            // Define the groups we want to ensure exist
            var groupNames = new[] { "Dev", "RH", "Any" };
            var groupsToAdd = new List<Group>();

            // Check each group and create if it doesn't exist
            foreach (var name in groupNames)
            {
                if (!existingGroups.Any(g => g.Name == name))
                {
                    var newGroup = new Group { Name = name, Enable = true };
                    groupsToAdd.Add(newGroup);
                    Console.WriteLine($"Creating group: {name}");
                }
            }

            // Add new groups if any
            if (groupsToAdd.Any())
            {
                await context.Groups.AddRangeAsync(groupsToAdd);
                await context.SaveChangesAsync();
            }

            // Return all groups (existing + newly created)
            return await context.Groups.ToListAsync();
        }

        private static async Task SeedUsers(UserManager<AppUser> userManager, List<Group> groups)
        {
            // Define default users to ensure they exist
            var defaultUsers = new List<(string username, string email, string role, int? groupId)>
            {
                ("admin", "admin@gmail.com", UserRole.Administrator.ToString(), null),
                ("manager", "manager@gmail.com", UserRole.Manager.ToString(), null)
            };

            // Add role-specific users for each group
            var rolesToSeed = new[]
            {
                UserRole.HierarchicalLeader.ToString(),
                UserRole.TeamLeader.ToString(),
                UserRole.PostLeader.ToString(),
                UserRole.QualityAgent.ToString()
            };

            for (int groupIndex = 0; groupIndex < groups.Count; groupIndex++)
            {
                var group = groups[groupIndex];
                var groupSuffix = (groupIndex + 1).ToString();

                foreach (var role in rolesToSeed)
                {
                    var username = $"{role.ToLower()}{groupSuffix}";
                    var email = $"{username}@gmail.com";

                    defaultUsers.Add((username, email, role, group.Id));
                }
            }

            // Check and create each user if they don't exist
            foreach (var (username, email, role, groupId) in defaultUsers)
            {
                var existingUser = await userManager.FindByNameAsync(username);
                if (existingUser == null)
                {
                    var user = new AppUser
                    {
                        UserName = username,
                        Email = email,
                        GroupId = groupId
                    };

                    var result = await userManager.CreateAsync(user, DefaultPassword);
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(user, role);
                        Console.WriteLine($"Created user: {username} with role: {role}");
                    }
                    else
                    {
                        var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                        Console.WriteLine($"Failed to create user {username}: {errors}");
                    }
                }
            }
        }
    }
}

