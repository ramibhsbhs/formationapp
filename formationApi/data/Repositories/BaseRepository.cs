using System;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace formationApi.data
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        protected readonly ApplicationContext _dbContext;

        public BaseRepository(ApplicationContext dbContextFactory)
        {
            _dbContext = dbContextFactory;
        }

        public virtual async Task<IList<TEntity>> GetAll()
        {
            return await _dbContext.Set<TEntity>()
                .Where(x => x.Enable)
                .ToListAsync();
        }

        public async Task<TEntity> Get(int id)
        {
            return await _dbContext.Set<TEntity>()
                .Where(x => x.Enable)
                .FirstOrDefaultAsync(x => x.Id.Equals(id));
        }

        public async Task<TEntity> Create(TEntity obj)
        {
            EntityEntry<TEntity> newObj = await _dbContext.Set<TEntity>().AddAsync(obj);
            newObj.Entity.CreatedAt = DateTime.Now.ToUniversalTime();
            await _dbContext.SaveChangesAsync();
            return newObj.Entity;
        }

        public async Task<TEntity> Update(TEntity obj)
        {
            EntityEntry<TEntity> newObj = _dbContext.Set<TEntity>().Update(obj);
            newObj.Entity.UpdatedAt = DateTime.Now.ToUniversalTime();
            await _dbContext.SaveChangesAsync();
            return newObj.Entity;
        }

        public async Task Delete(int id)
        {
            TEntity obj = await _dbContext.Set<TEntity>().FirstOrDefaultAsync(x => x.Id.Equals(id));
            if (obj != null)
            {
                obj.DeletedAt = DateTime.Now.ToUniversalTime();
                obj.Enable = false;

                await _dbContext.SaveChangesAsync();
            }
        }
    }
}

