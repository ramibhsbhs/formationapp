using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Task<IList<TEntity>> GetAll();
        Task<TEntity> Get(int id);

        Task<TEntity> Create(TEntity obj);
        Task<IEnumerable<TEntity>> InsertMany(IEnumerable<TEntity> entities);
        Task<TEntity> Update(TEntity obj);
        Task Delete(int id);
    }
}

