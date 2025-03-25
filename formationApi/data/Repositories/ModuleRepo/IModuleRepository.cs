using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.ModuleRepo
{
	public interface IModuleRepository : IBaseRepository<Module>
	{
		Task<ICollection<Module>> GetAllByFormationId(int id);

    }
}

