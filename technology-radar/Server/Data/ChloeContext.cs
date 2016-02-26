using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System;
using System.Data.Entity;
using System.Linq;

namespace Chloe.Server.Data
{
    public class ChloeContext: DbContext, IDbContext
    {
        public ChloeContext()
            : base(nameOrConnectionString: "ChloeContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }

        public DbSet<Framework> Frameworks { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<Technique> Techniques { get; set; }
        public DbSet<Tool> Tools { get; set; }

        public DbSet<Article> Articles { get; set; }
        public DbSet<TechnologyArticle> TechnologyArticles { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<YouTubeVideo> YouTubeVideos { get; set; }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
     
        }

        public override int SaveChanges()
        {
            foreach (var entry in this.ChangeTracker.Entries()
            .Where(e => e.Entity is ILoggable &&
                ((e.State == EntityState.Added || (e.State == EntityState.Modified)))))
            {

                if (((ILoggable)entry.Entity).CreatedDate == null)
                {
                    ((ILoggable)entry.Entity).CreatedDate = DateTime.UtcNow;
                }

                ((ILoggable)entry.Entity).LastModifiedDate = DateTime.UtcNow;

            }

            return base.SaveChanges();
        }
    }
}
