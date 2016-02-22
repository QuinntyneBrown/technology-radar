using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/youtubevideo")]
    public class YouTubeVideoController: ApiController
    {
        public YouTubeVideoController(IYouTubeVideoService service)
        {
            this.service = service;
        }


        protected readonly IYouTubeVideoService service;
    }
}