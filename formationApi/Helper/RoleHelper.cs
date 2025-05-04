using System.Security.Claims;
using formationApi.data.models;

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

        public static bool IsAdmin(this ClaimsPrincipal user)
        {
            return user.InRole("Administrator", "Manager");
        }

        public static bool IsManager(this ClaimsPrincipal user)
        {
            return user.InRole("Manager");
        }

        public static bool IsSupervisor(this ClaimsPrincipal user)
        {
            return user.InRole("HierarchicalLeader");
        }

        public static bool IsCandidate(this ClaimsPrincipal user)
        {
            return user.InRole("PostLeader", "TeamLeader");
        }
    }
}