﻿using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LanguageDto : TechnologyDto
    {
        public LanguageDto(Language entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}