using dotnetClaimAuthorization.Controllers;
using dotnetClaimAuthorization.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetClaimAuthorization.Services.Interfaces
{
    public interface IBookInfoRepository
    {
        Task<IEnumerable<BookInfo>> Get();
    }
}
