using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TechniqueAddOrUpdateResponseDto : TechnologyAddOrUpdateResponseDto
    {
        public TechniqueAddOrUpdateResponseDto(Technique entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}