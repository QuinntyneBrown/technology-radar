using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using Chloe.Server.Services.Contracts;

namespace Chloe.Server.Services
{
    public class BlogStoryService: IBlogStoryService
    {
        public BlogStoryService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.BlogStories;
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<BlogStory> repository;
    }
}