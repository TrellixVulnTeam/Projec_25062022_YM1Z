using dotnetClaimAuthorization.Data.Entities;
using dotnetClaimAuthorization.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetClaimAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookInfoRepository _repo;
        public BookController(IBookInfoRepository repo)
        {
            _repo = repo;
        }
        [HttpGet("GetBookList")]
        public async Task<IEnumerable<BookInfo>> GetBookList()
        {
            var books = await _repo.Get();
            return books;
        }
    }
}
