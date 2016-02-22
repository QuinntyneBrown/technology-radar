namespace Chloe.Server.Models
{
    public class TechnologyYouTubeVideo: BaseEntity
    {
        public int TechnologyId { get; set; }
        public TechnologyType TechnologyType { get; set; }
        public int YouTubeVideoId { get; set; }
    }
}