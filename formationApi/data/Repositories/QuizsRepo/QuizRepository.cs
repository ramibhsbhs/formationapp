using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using formationApi.data.Entities;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data.Repositories.QuizsRepo
{
    public class QuizRepository : BaseRepository<Quiz>, IQuizRepository
    {
        public QuizRepository(ApplicationContext dbContext) : base(dbContext)
        {
        }

        public async override Task<IList<Quiz>> GetAll()
        {
           return await _dbContext.Quizzes
                .Include(q => q.Questions)
                .ThenInclude(q => q.Answers)
                .ToListAsync();
        }
        public override async Task<Quiz> Get(int id)
        {
            return await _dbContext.Quizzes
                .Include(q => q.Questions)
                .ThenInclude(q => q.Answers)
                .FirstOrDefaultAsync(q => q.Id == id);
        }
    }
}