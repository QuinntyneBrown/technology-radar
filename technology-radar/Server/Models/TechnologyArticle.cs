namespace Chloe.Server.Models
{
    public class TechnologyArticle: BaseEntity
    {
        public int TechnologyId { get; set; }
        public TechnologyType TechnologyType { get; set; }
        public int ArticleId { get; set; }
    }
}