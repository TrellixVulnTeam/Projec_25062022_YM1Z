using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetClaimAuthorization.Data.Entities
{
    public class BookInfo
    {
        public int Id { get; set; }
        public string BookName { get; set; }
        public string WriterName { get; set; }
        public string CoverURL { get; set; }
        public float Price { get; set; }
    }
}
