using System;
using formationApi.data.Entities;
namespace formationApi.data.Repositories.FormationRepo
{
	public interface IFormationRepository : IBaseRepository<Formation>
	{
        Task<Formation> GetFormationByIdAsync(int id);
        Task AddFormationAsync(Formation formation);
    }
}

