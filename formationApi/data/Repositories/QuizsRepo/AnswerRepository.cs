using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.QuizsRepo
{
    public class AnswerRepository : BaseRepository<Answer>, IAnswerRepository
    {
        public AnswerRepository(ApplicationContext dbContext) : base(dbContext)
        {
        }
    }
}