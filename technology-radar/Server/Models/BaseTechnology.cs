
using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class BaseTechnology: BaseEntity
    {
        public BaseTechnology()
        {
            this.Ratings = new HashSet<Rating>();
        }
        public string Abstract { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }
}