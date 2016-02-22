namespace Chloe.Server.Models
{
    public class Article: BaseEntity
    {
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string Description { get; set; }
        public int Url { get; set; }
    }
}