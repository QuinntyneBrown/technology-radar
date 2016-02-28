using System;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System.Linq;

namespace Chloe.Server.Services
{
    public class FrameworkService : IFrameworkService
    {
        public FrameworkService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Frameworks;
        }

        public FrameworkAddOrUpdateResponseDto AddOrUpdate(FrameworkAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Framework());
            entity.Name = request.Name;
            entity.Abstract = request.Abstract;
            entity.Description = request.Description;
            entity.Rating = request.Rating;
            entity.Abstract = request.Abstract;
            uow.SaveChanges();
            return new FrameworkAddOrUpdateResponseDto(entity);
        }

        public ICollection<FrameworkDto> GetAll()
        {
            ICollection<FrameworkDto> response = new HashSet<FrameworkDto>();

            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new FrameworkDto(entity));
            }

            return response;
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public FrameworkDto GetById(int id)
        {
            var entity = this.uow.Frameworks.GetAll().Where(x => x.Id == id).Single();
            return new FrameworkDto(entity);
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Framework> repository;
    }
}