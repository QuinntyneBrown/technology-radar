using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IToolService
    {
        ToolAddOrUpdateResponseDto AddOrUpdate(ToolAddOrUpdateRequestDto request);
        ICollection<ToolDto> GetAll();
        dynamic Remove(int id);
    }
}