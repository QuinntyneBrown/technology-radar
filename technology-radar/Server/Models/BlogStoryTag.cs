namespace Chloe.Server.Models
{
    public class BlogStoryTag: BaseEntity
    {
        public int TagId { get; set; }
        public int BlogStoryId { get; set; }
    }
}