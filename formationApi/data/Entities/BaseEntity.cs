using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace formationApi.data.Entities
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        [JsonIgnore]
        public DateTime? DeletedAt { get; set; }
        [JsonIgnore]
        public bool Enable { get; set; } = true;
    }

}