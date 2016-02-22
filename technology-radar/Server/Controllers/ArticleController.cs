using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/article")]
    public class ArticleController: ApiController
    {
        public ArticleController(IArticleService service)
        {
            this.service = service;
        }

        protected readonly IArticleService service;
    }
}