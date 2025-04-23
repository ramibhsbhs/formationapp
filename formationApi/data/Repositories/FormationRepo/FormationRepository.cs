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
                .Include(f => f.Sessions)
                .Include(f => f.Groups)
                .ThenInclude(g => g.Users)
                .ToListAsync();
        }

        public async Task<Formation> GetFormationByIdAsync(int id)
        {
            return await Get(id);
        }

        public async Task AddFormationAsync(Formation formation)
        {
            await Create(formation);
        }
    }
}


