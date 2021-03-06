﻿using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LanguageAddOrUpdateResponseDto : TechnologyAddOrUpdateResponseDto
    {
        public LanguageAddOrUpdateResponseDto(Language entity)
        {
            this.Id = entity.Id;
            this.Abstract = entity.Abstract;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
            this.Description = entity.Description;
            this.TechnologyType = entity.TechnologyType;
        }
    }
}