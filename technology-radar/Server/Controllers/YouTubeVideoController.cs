﻿using Chloe.Server.Services.Contracts;
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

        //[Route("add")]
        //[HttpPost]
        //public IHttpActionResult Add(YouTubeVideoAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        //[Route("update")]
        //[HttpPut]
        //public IHttpActionResult Update(YouTubeVideoAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        //[AllowAnonymous]
        //[Route("get")]
        //[HttpGet]
        //public IHttpActionResult Get() { return Ok(this.service.GetAll()); }

        //[Route("getById")]
        //[HttpGet]
        //public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }

        //[Route("remove")]
        //[HttpDelete]
        //public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }


        protected readonly IYouTubeVideoService service;
    }
}