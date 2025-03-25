using System;
using formationApi.data.Entities;

namespace formationApi.data.Repositories.AttachmentRepo
{
    public class AttatchmentRepository : BaseRepository<Attachment>, IAttachmentRepository
    {
        
        public AttatchmentRepository(ApplicationContext dbContextFactory) : base(dbContextFactory)
        {
        }
    }
}

