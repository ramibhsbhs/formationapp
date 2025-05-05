using System;
using formationApi.data.Entities;
using formationApi.data.models;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data.Repositories.FormationRepo
{
    public class FormationRepository : BaseRepository<Formation>, IFormationRepository
    {
        public FormationRepository(ApplicationContext context) : base(context)
        {
        }

        public override async Task<IList<Formation>> GetAll()
        {
            return await _dbContext.Formations
                .Where(x => x.Enable)
                .Include(f => f.Sessions.Where(s => s.Enable)) // Using standard Include with filter
                .Include(f => f.Groups.Where(g => g.Enable))   // Using standard Include with filter
                .ThenInclude(g => g.Users)
                .Include(f => f.Roles)
                .ToListAsync();
        }
        public async override Task<Formation> Get(int id)
        {
            var formation = await _dbContext.Formations
                .Where(x => x.Enable)
                .Include(f => f.Sessions.Where(s => s.Enable)) // Using standard Include with filter
                .Include(f => f.Groups.Where(g => g.Enable))   // Using standard Include with filter
                .ThenInclude(g => g.Users)
                .Include(f => f.Roles)
                .FirstOrDefaultAsync(x => x.Id.Equals(id));

            return formation;
        }

        public async Task<Formation> GetFormationByIdAsync(int id)
        {
            return await Get(id);
        }

        /// <summary>
        /// Get a formation with only enabled sessions and modules
        /// </summary>
        /// <param name="id">Formation ID</param>
        /// <returns>Formation with enabled sessions and modules</returns>
        public async Task<Formation> GetFormationWithEnabledItemsAsync(int id)
        {
            return await _dbContext.Formations
                .Where(x => x.Enable && x.Id == id)
                .Include(f => f.Sessions.Where(s => s.Enable))
                .Include(f => f.Modules)
                    .ThenInclude(m => m.Quiz)
                .Include(f => f.Modules.Where(m => m.Enable))
                    .ThenInclude(m => m.Attachments.Where(a => a.Enable))
                .Include(f => f.Groups.Where(g => g.Enable))
                    .ThenInclude(g => g.Users)
                .Include(f => f.Roles)
                .Include(f => f.FinalQuiz)
                .FirstOrDefaultAsync();
        }

        public async Task AddFormationAsync(Formation formation)
        {
            await Create(formation);
        }

    }
}


