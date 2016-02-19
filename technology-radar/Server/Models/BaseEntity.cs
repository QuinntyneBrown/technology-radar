using System;

namespace Chloe.Server.Models
{
    public class BaseEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }
        
        public bool IsDeleted { get; set; }

        public DateTime Created { get; set; }

        public int UserId { get; set; }
    }
}