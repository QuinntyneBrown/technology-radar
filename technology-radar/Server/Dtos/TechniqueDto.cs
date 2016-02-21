using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TechniqueDto : TechnologyDto
    {
        public TechniqueDto(Technique entity)
        {
            this.Id = entity.Id;
            this.Abstract = entity.Abstract;
            this.Name = entity.Name;
            this.Rating = entity.Rating;
            this.Description = entity.Description;
        }
    }
}