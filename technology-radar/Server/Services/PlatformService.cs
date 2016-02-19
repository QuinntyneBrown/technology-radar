using System;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Models;
using Chloe.Server.Data.Contracts;
using System.Linq;


namespace Chloe.Server.Services
{
    public class PlatformService : IPlatformService
    {
        public PlatformService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Platforms;
        }

        public PlatformAddOrUpdateResponseDto AddOrUpdate(PlatformAddOrUpdateRequestDto request)
        {
            throw new NotImplementedException();
        }

        public ICollection<PlatformDto> GetAll()
        {
            var response = new HashSet<PlatformDto>();
            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new PlatformDto(entity));
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

        protected readonly IChloeUow uow;
        protected readonly IRepository<Platform> repository;
    }
}