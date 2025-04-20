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
        public async Task<IEnumerable<TEntity>> InsertMany(IEnumerable<TEntity> entities)
        {
            if (entities == null)
            {
                throw new ArgumentNullException(nameof(entities));
            }

            if (!entities.Any())
            {
                return new List<TEntity>();
            }

            // Start a transaction to ensure consistency
            using var transaction = await _dbContext.Database.BeginTransactionAsync();
            try
            {
                var utcNow = DateTime.UtcNow;

                // Validate and prepare entities
                foreach (var entity in entities)
                {
                    if (entity == null)
                    {
                        throw new ArgumentException("Entity cannot be null.", nameof(entities));
                    }

                    // Set audit fields only if not already set
                    if (entity.CreatedAt == default)
                    {
                        entity.CreatedAt = utcNow;
                    }

                    entity.Enable = true; // Ensure new entities are enabled
                    entity.UpdatedAt ??= utcNow; // Set UpdatedAt if null
                }

                // Add entities to the context
                await _dbContext.Set<TEntity>().AddRangeAsync(entities);

                // Save changes
                await _dbContext.SaveChangesAsync();

                // Commit the transaction
                await transaction.CommitAsync();

                return entities;
            }
            catch (DbUpdateException ex)
            {
                // Roll back the transaction
                await transaction.RollbackAsync();

                // Log the error (replace with proper logging in a real app)
                Console.WriteLine($"Error saving entities: {ex.InnerException?.Message ?? ex.Message}");

                // Throw a more descriptive exception
                throw new InvalidOperationException(
                    $"Failed to save entities due to a database error: {ex.InnerException?.Message ?? ex.Message}", ex);
            }
            catch (Exception ex)
            {
                // Roll back the transaction
                await transaction.RollbackAsync();

                // Log the error
                Console.WriteLine($"Unexpected error: {ex.Message}");

                // Throw a generic exception
                throw new InvalidOperationException("An unexpected error occurred while saving entities.", ex);
            }
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

