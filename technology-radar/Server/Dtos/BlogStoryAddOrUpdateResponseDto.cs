using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class BlogStoryAddOrUpdateResponseDto: BlogStoryDto
    {
        public BlogStoryAddOrUpdateResponseDto()
        {

        }

        public BlogStoryAddOrUpdateResponseDto(BlogStory entity)
            :base(entity)
        {

        }
    }
}