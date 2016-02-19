using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class FrameworkDto: TechnologyDto
    {
        public FrameworkDto(Framework entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}