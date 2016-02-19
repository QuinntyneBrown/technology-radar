using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LanguageAddOrUpdateResponseDto : TechnologyAddOrUpdateResponseDto
    {
        public LanguageAddOrUpdateResponseDto(Language entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}