using System.ComponentModel.DataAnnotations.Schema;

namespace formationApi.data.Entities
{
    [Table("Attachments")]
    public class Attachment: BaseEntity
    {
        public string Lien { get; set; } 
        public string Type { get; set; } 
        public int ModuleId { get; set; }
        public Module Module { get; set; }
    }
}

