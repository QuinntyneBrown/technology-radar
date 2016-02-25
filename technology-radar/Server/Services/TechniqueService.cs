using System;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Models;
using Chloe.Server.Data.Contracts;
using System.Linq;


namespace Chloe.Server.Services
{
    public class TechniqueService : ITechniqueService
    {
        public TechniqueService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Techniques;
        }

        public TechniqueAddOrUpdateResponseDto AddOrUpdate(TechniqueAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Name == request.Name && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Technique());
            entity.Name = request.Name;
            entity.Abstract = request.Abstract;
            entity.Description = request.Description;
            entity.Rating = request.Rating;
            entity.Abstract = request.Abstract;
            uow.SaveChanges();
            return new TechniqueAddOrUpdateResponseDto(entity);
        }

        public ICollection<TechniqueDto> GetAll()
        {
            var response = new HashSet<TechniqueDto>();
            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new TechniqueDto(entity));
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

        public TechniqueDto GetById(int id)
        {
            var entity = this.uow.Techniques.GetAll().Where(x => x.Id == id).Single();
            return new TechniqueDto(entity);
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Technique> repository;
    }
}