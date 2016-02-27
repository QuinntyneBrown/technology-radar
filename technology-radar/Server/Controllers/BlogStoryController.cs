using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/article")]
    public class BlogStoryController : ApiController
    {
        public BlogStoryController(IBlogStoryService service)
        {
            this.service = service;
        }

        protected readonly IBlogStoryService service;
    }
}
