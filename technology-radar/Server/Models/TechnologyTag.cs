namespace Chloe.Server.Models
{
    public class TechnologyTag: BaseEntity
    {
        public int TagId { get; set; }
        public int TechnologyId { get; set; }
        public TechnologyType TechnologyType { get; set; }
    }
}