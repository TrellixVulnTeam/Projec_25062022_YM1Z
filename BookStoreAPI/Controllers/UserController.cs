using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Claim.Data.Entities;
using dotnetClaimAuthorization.Model;
using Enum;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Model;
using Models;
using Models.BindingModel;
using Models.DTO;

namespace dotnetClaimAuthorization.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly JWTConfig _jWTConfig;
        private readonly IConfiguration _configuration;
        public UserController(ILogger<UserController> logger, UserManager<AppUser> userManager, SignInManager<AppUser> signManager, IOptions<JWTConfig> jwtConfig, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signManager;
            _roleManager = roleManager;
            _logger = logger;
            _jWTConfig = jwtConfig.Value;
            _configuration = configuration;
        }

        [HttpPost("RegisterUser")]
        public async Task<object> RegisterUser([FromBody] AddUpdateRegisterUserBindingModel model)
        {
            try
            {
                var user = new AppUser() { FirstName = model.FirstName, LastName = model.LastName, Email = model.Email, UserName = model.Email, DateCreated = DateTime.UtcNow, DateModified = DateTime.UtcNow };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    var tempUser = await _userManager.FindByEmailAsync(model.Email);
                    
                    return await Task.FromResult(new ResponseModel(ResponseCode.OK, "User has been Registered", null));
                }
                return await Task.FromResult(new ResponseModel(ResponseCode.Error, "", result.Errors.Select(x => x.Description).ToArray()));
            }
            catch (Exception ex)
            {
                return await Task.FromResult(new ResponseModel(ResponseCode.Error, ex.Message, null));
            }
        }
    
   


           ///<summary>
   ///To login into App  
   ///</summary>
   ///<param name="model"></param>
   //
        [HttpPost("Login")]
        public async Task<object> Login([FromBody] LoginBindingModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
                    if (result.Succeeded)
                    {
                        var appUser = await _userManager.FindByEmailAsync(model.Email);
                        var user = new UserDTO(appUser.FirstName, appUser.LastName, appUser.Email, appUser.UserName, appUser.DateCreated);
                        user.Token = GenerateToken(appUser);
                       // user.RefreshToken = GenerateRefreshToken();
                        return await Task.FromResult(new ResponseModel(ResponseCode.OK, "", user));

                    }
                }

                return await Task.FromResult(new ResponseModel(ResponseCode.Error, "invalid Email or password", null));

            }
            catch (Exception ex)
            {
                return await Task.FromResult(new ResponseModel(ResponseCode.Error, ex.Message, null));
            }
        }

//        [HttpPost]
//        [Route("refresh-token")]
//        public async Task<IActionResult> RefreshToken(TokenModel tokenModel)
//        {
//            if (tokenModel is null)
//            {
//                return BadRequest("Invalid client request");
//            }

//            string? accessToken = tokenModel.AccessToken;
//            string? refreshToken = tokenModel.RefreshToken;

//            var principal = GetPrincipalFromExpiredToken(accessToken);
//            if (principal == null)
//            {
//                return BadRequest("Invalid access token or refresh token");
//            }

//#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
//#pragma warning disable CS8602 // Dereference of a possibly null reference.
//            string username = principal.Identity.Name;
//#pragma warning restore CS8602 // Dereference of a possibly null reference.
//#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.

//            var user = await _userManager.FindByNameAsync(username);

//            if (user == null || user.RefreshToken != refreshToken || user.RefreshTokenExpiryTime <= DateTime.Now)
//            {
//                return BadRequest("Invalid access token or refresh token");
//            }

//            var newAccessToken = GenerateToken(user);
//            var newRefreshToken = GenerateRefreshToken();

//            user.RefreshToken = newRefreshToken;
//            await _userManager.UpdateAsync(user);

//            return new ObjectResult(new
//            {
//                accessToken = new JwtSecurityTokenHandler().WriteToken(newAccessToken),
//                refreshToken = newRefreshToken
//            });
//        }


        private string GenerateToken(AppUser user)
        {
            var claims = new List<System.Security.Claims.Claim>(){
     new System.Security.Claims.Claim(JwtRegisteredClaimNames.NameId,user.Id),
               new System.Security.Claims.Claim(JwtRegisteredClaimNames.Email,user.Email),
               new System.Security.Claims.Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
           };
            
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jWTConfig.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(5),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = _jWTConfig.Audience,
                Issuer = _jWTConfig.Issuer
            };
            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);
        }

        private static string GenerateRefreshToken()
        {
            var randomNumber = new byte[64];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        private ClaimsPrincipal? GetPrincipalFromExpiredToken(string? token)
        {
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"])),
                ValidateLifetime = false
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
            if (securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                throw new SecurityTokenException("Invalid token");

            return principal;

        }
    }
}
