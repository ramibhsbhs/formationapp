
using Microsoft.AspNetCore.Identity;

namespace formationApi.data.Entities
{
	public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; } = new List<AppUserRole>();
    }
}

