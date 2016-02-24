using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ITechniqueService
    {
        TechniqueAddOrUpdateResponseDto AddOrUpdate(TechniqueAddOrUpdateRequestDto request);
        ICollection<TechniqueDto> GetAll();
        TechniqueDto GetById(int id);
        dynamic Remove(int id);
    }
}