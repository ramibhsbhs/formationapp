using System;
using formationApi.data.Entities;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data.Repositories.ModuleRepo
{
    public class ModuleRepository : BaseRepository<Module>, IModuleRepository
    {
        public ModuleRepository(ApplicationContext dbContextFactory) : base(dbContextFactory)
        {
        }

        public async Task<ICollection<Module>> GetAllByFormationId(int formationId)
        {
            return await _dbContext.Modules
                .Where(m=>m.Enable == true)

                .Include(m => m.Attachments) 
                .Where(m => m.FormationId == formationId)
                .OrderBy(m => m.Position) 
                .ToListAsync();
        }
        override public async Task<IList<Module>> GetAll()
        {
            return await _dbContext.Modules
                .Where(x => x.Enable)
                //.Include(m=>m.Attachments)
                .Select(m => new Module
                {
                    Id = m.Id,
                    Discription = m.Discription,
                    Title = m.Title,
                    Position = m.Position,
                    CreatedAt = m.CreatedAt,
                    UpdatedAt = m.UpdatedAt,
                    Attachments = m.Attachments
                        .Where(a => a.Enable)
                        .ToList()
                })
                .OrderBy(m =>m.Position)
                .ToListAsync();
        }

    }
}

