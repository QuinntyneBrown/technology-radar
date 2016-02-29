using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Linq;

namespace Chloe.Server.Services
{
    public class SearchService: ISearchService
    {
        public SearchService(IChloeUow uow)
        {
            this.uow = uow;
        }

        public QueryResponseDto Query(QueryRequestDto request)
        {
            var results = uow.Technologies
                .GetAll()
                .Where(t => t.Name.Contains(request.Term) || t.Description.Contains(request.Term))
                .Where(x=>x.IsDeleted ==false)
                .ToList();

            return new QueryResponseDto(results);
        }

        protected readonly IChloeUow uow;
    }
}