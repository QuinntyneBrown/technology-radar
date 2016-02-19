using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class FrameworkAddOrUpdateResponseDto : TechnologyAddOrUpdateResponseDto
    {
        public FrameworkAddOrUpdateResponseDto(Framework entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}