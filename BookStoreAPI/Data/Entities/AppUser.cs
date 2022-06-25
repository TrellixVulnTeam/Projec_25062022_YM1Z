using System;
using Microsoft.AspNetCore.Identity;

namespace Claim.Data.Entities{

    public class AppUser:IdentityUser{

    public string FirstName { get; set; }   
    public string LastName { get; set; }   
     public DateTime DateCreated { get; set; }   
     public DateTime DateModified { get; set; }
     public string? RefreshToken { get; set; }
     public DateTime RefreshTokenExpiryTime { get; set; }
    }
}