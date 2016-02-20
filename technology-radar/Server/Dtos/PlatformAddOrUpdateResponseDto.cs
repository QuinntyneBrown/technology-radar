using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlatformAddOrUpdateResponseDto : TechnologyAddOrUpdateResponseDto
    {
        public PlatformAddOrUpdateResponseDto(Platform entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
            this.Description = entity.Description;
        }
    }
}