using System;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
	public class CreateGroupDto
	{
        [Required]
        public string Name { get; set; }

        public ICollection<int> Users = new List<int>();
    }
}

