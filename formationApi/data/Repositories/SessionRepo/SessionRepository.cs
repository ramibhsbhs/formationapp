using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.SessionRepo
{
	public class SessionRepository : BaseRepository<Session> , ISessionRepository
	{
        private readonly ApplicationContext _context;

        public SessionRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
    }
}

