using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Models;
using Chloe.Server.Services.Contracts;
using System.Linq;

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

        public BlogStoryAddOrUpdateResponseDto AddOrUpdate(BlogStoryAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                        .Where(x => x.Id == request.Id && x.IsDeleted == false)
                        .FirstOrDefault();
            if (entity == null) repository.Add(entity = new BlogStory());

            entity.Abstract = request.Abstract;
            entity.Body = request.Body;
            entity.IsPublished = request.IsPublished;
            uow.SaveChanges();
            return new BlogStoryAddOrUpdateResponseDto(entity);
        }

        public ICollection<BlogStoryDto> GetAll()
        {
            var response = new HashSet<BlogStoryDto>();
            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new BlogStoryDto(entity));
            }
            return response;
        }

        public BlogStoryDto GetById(int id)
        {
            var entity = repository.GetAll().Where(x => x.Id == id).Single();
            return new BlogStoryDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }
    }
}