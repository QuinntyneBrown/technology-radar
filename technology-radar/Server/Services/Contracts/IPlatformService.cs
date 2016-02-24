using Chloe.Server.Dtos;
using System.Collections.Generic;


namespace Chloe.Server.Services.Contracts
{
    public interface IPlatformService
    {
        PlatformAddOrUpdateResponseDto AddOrUpdate(PlatformAddOrUpdateRequestDto request);
        ICollection<PlatformDto> GetAll();
        PlatformDto GetById(int id);
        dynamic Remove(int id);
    }
}