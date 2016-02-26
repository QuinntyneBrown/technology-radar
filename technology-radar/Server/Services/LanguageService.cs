using System;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Data.Contracts;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class LanguageService : ILanguageService
    {
        public LanguageService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Languages;
        }

        public LanguageAddOrUpdateResponseDto AddOrUpdate(LanguageAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                        .Where(x => x.Id == request.Id && x.IsDeleted == false)
                        .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Language());
            entity.Name = request.Name;
            entity.Abstract = request.Abstract;
            entity.Description = request.Description;
            entity.Rating = request.Rating;
            uow.SaveChanges();
            return new LanguageAddOrUpdateResponseDto(entity);
        }

        public ICollection<LanguageDto> GetAll()
        {
            var response = new HashSet<LanguageDto>();
            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new LanguageDto(entity));
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

        public LanguageDto GetById(int id)
        {
            var entity = this.uow.Languages.GetAll().Where(x => x.Id == id).Single();
            return new LanguageDto(entity);
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Language> repository;
    }
}