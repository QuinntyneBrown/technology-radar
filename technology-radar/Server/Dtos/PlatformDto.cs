using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlatformDto : TechnologyDto
    {
        public PlatformDto(Platform entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}