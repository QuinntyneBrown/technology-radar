using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ILanguageService
    {
        LanguageAddOrUpdateResponseDto AddOrUpdate(LanguageAddOrUpdateRequestDto request);
        ICollection<LanguageDto> GetAll();
        dynamic Remove(int id);
    }
}