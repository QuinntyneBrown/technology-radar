using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ToolDto : TechnologyDto
    {
        public ToolDto(Tool entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
        }
    }
}