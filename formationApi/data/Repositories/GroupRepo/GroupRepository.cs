using System;
using formationApi.data.Entities;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data.Repositories.GroupRepo
{
    public class GroupRepository : BaseRepository<Group>, IGroupRepository
    {
        private readonly ApplicationContext _context;

        public GroupRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }


        public async Task<ICollection<Group>> GetAllWithUsers()
        {
            return await _context.Groups
                .Where(x => x.Enable)
                .Include(g => g.Users)
                    .ThenInclude(u => u.UserRoles) 
                    .ThenInclude(ur => ur.Role)
                .ToListAsync();
        }
    }
}

