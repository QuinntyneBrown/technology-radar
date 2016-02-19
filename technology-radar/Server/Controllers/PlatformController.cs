﻿using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/platform")]
    public class PlatformController: ApiController
    {
        public PlatformController(IPlatformService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(dynamic dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(dynamic dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get(dynamic dto) { return Ok(this.service.GetAll()); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly IPlatformService service;
    }
}