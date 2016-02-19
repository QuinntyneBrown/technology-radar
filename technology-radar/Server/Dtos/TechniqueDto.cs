﻿using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TechniqueDto : TechnologyDto
    {
        public TechniqueDto(Technique entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}