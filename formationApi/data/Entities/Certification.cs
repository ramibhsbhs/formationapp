using formationApi.data.models;

namespace formationApi.data.Entities
{
    public class Certification : BaseEntity
    {

        public string Description { get; set; }

        public int UserId { get; set; }
        public AppUser User { get; set; }

        public double Score { get; set; }

        public int SessionId { get; set; }

        public Session Session { get; set; }
    }
}