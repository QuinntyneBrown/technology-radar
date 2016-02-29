using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System;

namespace Chloe.Server.Data
{
    public class ChloeUow : IChloeUow
    {
        protected IDbContext dbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; }

        public ChloeUow(IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            var repositoryProvider = new RepositoryProvider(new RepositoryFactories());
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public ChloeUow(IRepositoryProvider repositoryProvider, IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }
        
        public IRepository<User> Users { get { return GetStandardRepo<User>(); } }
        public IRepository<Role> Roles { get { return GetStandardRepo<Role>(); } }
        public IRepository<Framework> Frameworks { get { return GetStandardRepo<Framework>(); } }
        public IRepository<Language> Languages { get { return GetStandardRepo<Language>(); } }
        public IRepository<Platform> Platforms { get { return GetStandardRepo<Platform>(); } }
        public IRepository<Technique> Techniques { get { return GetStandardRepo<Technique>(); } }
        public IRepository<Tool> Tools { get { return GetStandardRepo<Tool>(); } }

        public IRepository<Article> Articles { get { return GetStandardRepo<Article>(); } }
        public IRepository<TechnologyArticle> TechnologyArticles { get { return GetStandardRepo<TechnologyArticle>(); } }
        public IRepository<Tag> Tags { get { return GetStandardRepo<Tag>(); } }

        public IRepository<BlogStory> BlogStories { get { return GetStandardRepo<BlogStory>(); } }
        public IRepository<BaseTechnology> Technologies { get { return GetStandardRepo<BaseTechnology>(); } }


        protected void ConfigureDbContext(IDbContext dbContext)
        {
            dbContext.Configuration.ProxyCreationEnabled = false;
            dbContext.Configuration.LazyLoadingEnabled = false;
            dbContext.Configuration.ValidateOnSaveEnabled = false;
        }
        
        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        protected IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        protected T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.dbContext != null)
                {
                    this.dbContext.Dispose();
                }
            }
        }

        #endregion
        
        public void Add<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
