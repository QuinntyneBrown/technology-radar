using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IBlogStoryService
    {
        BlogStoryAddOrUpdateResponseDto AddOrUpdate(BlogStoryAddOrUpdateRequestDto request);
        ICollection<BlogStoryDto> GetAll();
        BlogStoryDto GetById(int id);
        dynamic Remove(int id);
    }
}
