using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.GroupRepo
{
	public interface IGroupRepository  : IBaseRepository<Group>
	{
        Task<ICollection<Group>> GetAllWithUsers();

    }
}

