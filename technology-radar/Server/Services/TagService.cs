using System;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System.Linq;

namespace Chloe.Server.Services
{
    public class TagService : ITagService
    {
        public TagService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Tags;
        }

        public TagAddOrUpdateResponseDto AddOrUpdate(TagAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Tag());
            entity.Name = request.Name;
            entity.Description = request.Description;
            uow.SaveChanges();
            return new TagAddOrUpdateResponseDto(entity);
        }

        public ICollection<TagDto> GetAll()
        {
            throw new NotImplementedException();
        }

        public TagDto GetById(int id)
        {
            throw new NotImplementedException();
        }

        public dynamic Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Tag> repository;
    }
}