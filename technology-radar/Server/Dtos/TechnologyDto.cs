using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TechnologyDto
    {
        public TechnologyDto(BaseTechnology entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Abstract = entity.Abstract;
            this.Description = entity.Description;
            this.TechnologyType = entity.TechnologyType;
        }

        public TechnologyDto()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Abstract { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public TechnologyType TechnologyType { get; set; }
    }
}