using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/search")]
    public class SearchController : ApiController
    {        
        public SearchController(ISearchService service)
        {
            this.service = service;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("query")]
        public IHttpActionResult Query([FromUri]QueryRequestDto dto)
        {
            return Ok(this.service.Query(dto));
        }

        protected readonly ISearchService service;
    }
}
