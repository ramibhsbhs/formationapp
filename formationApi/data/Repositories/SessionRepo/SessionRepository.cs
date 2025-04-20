using System;
using formationApi.data.Entities;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data.Repositories.SessionRepo
{
    public class SessionRepository : BaseRepository<Session>, ISessionRepository
    {
        private readonly ApplicationContext _context;

        public SessionRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
        public override async Task<IList<Session>> GetAll()
        {
            // return base.GetAll();
            return await _context.Sessions
                .Where(s => s.Enable)
                .Include(s => s.Formation)
                .OrderByDescending(s => s.StartDate)
                .ToListAsync();

        }
    }
}

