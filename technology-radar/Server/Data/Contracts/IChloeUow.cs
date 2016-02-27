using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Role> Roles { get; }
        IRepository<Framework> Frameworks { get; }
        IRepository<Language> Languages { get; }
        IRepository<Platform> Platforms { get; }
        IRepository<Technique> Techniques { get; }
        IRepository<Tool> Tools { get; }

        IRepository<Tag> Tags { get; }
        IRepository<Article> Articles { get; }
        IRepository<TechnologyArticle> TechnologyArticles { get; }
        IRepository<BlogStory> BlogStories { get; }
        void SaveChanges();
    }
}
