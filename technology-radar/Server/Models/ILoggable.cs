using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class ILoggable
    {
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}