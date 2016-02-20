using System;

namespace Chloe.Server.Models
{
    public interface ILoggable
    {
        DateTime CreatedDate { get; set; }
        DateTime LastModifiedDate { get; set; }
    }
}