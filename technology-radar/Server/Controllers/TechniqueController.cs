using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/technique")]
    public class TechniqueController : ApiController
    {
        public TechniqueController(ITechniqueService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(TechniqueAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(TechniqueAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [AllowAnonymous]
        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.GetAll()); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly ITechniqueService service;
    }
}
