using System;
using formationApi.data.Entities;
using formationApi.data.models;
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

        public async Task<Group> GetGroupByUserId(int userId)
        {
            var user = await _context.Users
                .Where(u => u.Id == userId && u.GroupId.HasValue)
                .FirstOrDefaultAsync();

            if (user == null || !user.GroupId.HasValue)
                return null;

            return await _context.Groups
                .Where(g => g.Id == user.GroupId.Value && g.Enable)
                .Include(g => g.Users)
                    .ThenInclude(u => u.UserRoles)
                    .ThenInclude(ur => ur.Role)
                .FirstOrDefaultAsync();
        }
    }
}
