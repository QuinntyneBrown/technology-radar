using Chloe.Server.Models;
using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class QueryResponseDto
    {
        public QueryResponseDto(IList<BaseTechnology> technologies)
        {
            this.Results = new HashSet<TechnologyDto>();
            foreach(var technology in technologies)
            {
                Results.Add(new TechnologyDto(technology));
            }
        }

        public ICollection<TechnologyDto> Results { get; set; }
    }
}