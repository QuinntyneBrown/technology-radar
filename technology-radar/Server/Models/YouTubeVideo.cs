namespace Chloe.Server.Models
{
    public class YouTubeVideo: BaseEntity
    {
        public string VideoId { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string Description { get; set; }
    }
}