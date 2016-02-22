using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ArticleDto
    {
        public ArticleDto()
        {

        }

        public ArticleDto(Article entity)
        {
            this.Id = entity.Id;
            this.Title = entity.Title;
            this.Abstract = entity.Abstract;
            this.Description = entity.Description;
            this.Url = entity.Url;
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string Description { get; set; }
        public int Url { get; set; }
    }
}