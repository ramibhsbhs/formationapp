﻿using System;
namespace formationApi.dtos.request
{
    public class UpdateSessionDto
    {
        public string? Title { get; set; }
        public DateOnly? StartDate { get; set; }
        public DateOnly? EndDate { get; set; }

    }
}

