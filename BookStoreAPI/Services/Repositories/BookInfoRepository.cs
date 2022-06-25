using Claim.Data;
using dotnetClaimAuthorization.Controllers;
using dotnetClaimAuthorization.Data.Entities;
using dotnetClaimAuthorization.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetClaimAuthorization.Services.Repositories
{
    public class BookInfoRepository:IBookInfoRepository
    {
        private readonly AppDBContext _context;
        public BookInfoRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<BookInfo>> Get()
        {
            var books = await _context.BookInfo.ToListAsync();
            return books;
        }

        
    }
}
