using System;

namespace Chloe.Server.Models
{
    public class BaseEntity: ILoggable
    {
        public BaseEntity()
        {
            this.CreatedDate = DateTime.UtcNow;
            this.LastModifiedDate = DateTime.UtcNow;
        }

        public int Id { get; set; }
        public string Name { get; set; }        
        public bool IsDeleted { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public int UserId { get; set; }
    }
}