using Chloe.Server.Dtos;
using System.Collections.Generic;


namespace Chloe.Server.Services.Contracts
{
    public interface IFrameworkService
    {
        FrameworkAddOrUpdateResponseDto AddOrUpdate(FrameworkAddOrUpdateRequestDto request);
        ICollection<FrameworkDto> GetAll();
        FrameworkDto GetById(int id);
        dynamic Remove(int id);
    }
}