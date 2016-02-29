using Chloe.Server.Dtos;

namespace Chloe.Server.Services.Contracts
{
    public interface ISearchService
    {
        QueryResponseDto Query(QueryRequestDto request);
    }
}
