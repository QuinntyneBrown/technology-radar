using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Models;
using Chloe.Server.Data.Contracts;
using System.Linq;

namespace Chloe.Server.Services
{
    public class ToolService : IToolService
    {
        public ToolService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Tools;
        }

        public ToolAddOrUpdateResponseDto AddOrUpdate(ToolAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Name == request.Name && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Tool());
            entity.Name = request.Name;
            entity.Description = request.Description;
            entity.Rating = request.Rating;
            entity.Abstract = request.Abstract;
            uow.SaveChanges();
            return new ToolAddOrUpdateResponseDto(entity);
        }

        public ICollection<ToolDto> GetAll()
        {
            var response = new HashSet<ToolDto>();
            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new ToolDto(entity));
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

        public ToolDto GetById(int id)
        {
            var entity = this.uow.Tools.GetAll().Where(x => x.Id == id).Single();
            return new ToolDto(entity);
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Tool> repository;
    }
}