﻿using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/framework")]
    public class FrameworkController : ApiController
    {
        public FrameworkController(IFrameworkService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(FrameworkAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(FrameworkAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [AllowAnonymous]
        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.GetAll()); }

        [AllowAnonymous]
        [Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly IFrameworkService service;
    }
}
