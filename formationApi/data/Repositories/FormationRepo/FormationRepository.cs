using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.FormationRepo
{
    public class FormationRepository : BaseRepository<Formation>, IFormationRepository
    {
        public FormationRepository(ApplicationContext context) : base(context)
        {
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


