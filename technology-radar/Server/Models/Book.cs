﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class Book: BaseEntity
    {
        public string Title { get; set; } 
        public string Description { get; set; }
    }
}