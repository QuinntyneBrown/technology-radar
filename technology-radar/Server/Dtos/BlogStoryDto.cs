using Chloe.Server.Models;
using System;

namespace Chloe.Server.Dtos
{
    public class BlogStoryDto
    {
        public BlogStoryDto()
        {

        }

        public BlogStoryDto(BlogStory entity)
        {
            this.Id = entity.Id;
            this.Body = entity.Body;
            this.Abstract = entity.Abstract;
            this.DatePublished = entity.DatePublished;
            this.IsPublished = entity.IsPublished;
            this.Slug = entity.Slug;
            this.Title = entity.Title;
            this.UniqueId = entity.UniqueId;
        }

        public int Id { get; set; }
        public string Body { get; set; }
        public string Abstract { get; set; }
        public DateTime DatePublished { get; set; }
        public bool IsPublished { get; set; }
        public string Slug { get; set; }
        public string Title { get; set; }
        public string UniqueId { get; set; }
    }
}