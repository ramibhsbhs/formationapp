using formationApi.data.Entities;

namespace formationApi.data.Repositories.CertificationRepo
{
    public class CertificationRepository :BaseRepository<Certification> , ICertificationRepository
    {
        public CertificationRepository(ApplicationContext context) : base(context)
        {
        }
    }
   
}