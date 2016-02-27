﻿using System;

namespace Chloe.Server.Models
{
    public class BlogStory: BaseEntity
    {
        public string Body { get; set; }
        public string Abstract { get; set; }
        public DateTime DatePublished { get; set; }
        public bool IsPublished { get; set; }
        public string Slug { get; set; }
        public string Title { get; set; }
        public string UniqueId { get; set; }
    }
}