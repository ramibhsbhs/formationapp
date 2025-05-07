using System.Security.Claims;
using formationApi.data.models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace formationApi.Helper
{
    public static class RoleHelper
    {
        public static bool InRole(this ClaimsPrincipal user, params string[] rolesToCheck)
        {
            if (user == null || rolesToCheck == null || !rolesToCheck.Any())
                return false;

            var userRoles = user.FindAll(ClaimTypes.Role).Select(c => c.Value);
            return userRoles.Any(role => rolesToCheck.Contains(role));
        }

        public static async Task<bool> InRoleAsync(this AppUser user, UserManager<AppUser> userManager, params string[] rolesToCheck)
        {
            if (user == null || rolesToCheck == null || !rolesToCheck.Any() || userManager == null)
                return false;

            var userRoles = await userManager.GetRolesAsync(user);
            return userRoles.Any(role => rolesToCheck.Contains(role));
        }

        public static bool IsAdmin(this ClaimsPrincipal user)
        {
            return user.InRole("Administrator");
        }

        public static async Task<bool> IsAdminAsync(this AppUser user, UserManager<AppUser> userManager)
        {
            return await user.InRoleAsync(userManager, "Administrator");
        }

        public static bool IsManager(this ClaimsPrincipal user)
        {
            return user.InRole("Manager");
        }

        public static async Task<bool> IsManagerAsync(this AppUser user, UserManager<AppUser> userManager)
        {
            return await user.InRoleAsync(userManager, "Manager");
        }

        public static bool IsSupervisor(this ClaimsPrincipal user)
        {
            return user.InRole("HierarchicalLeader");
        }

        public static async Task<bool> IsSupervisorAsync(this AppUser user, UserManager<AppUser> userManager)
        {
            return await user.InRoleAsync(userManager, "HierarchicalLeader");
        }

        public static bool IsCandidate(this ClaimsPrincipal user)
        {
            return user.InRole("PostLeader", "TeamLeader", "QualityAgent");
        }

        public static async Task<bool> IsCandidateAsync(this AppUser user, UserManager<AppUser> userManager)
        {
            return await user.InRoleAsync(userManager, "PostLeader", "TeamLeader", "QualityAgent");


            //agent qualite ,chef de post, chef de qualite  
        }
    }
}