using System;
using formationApi.data.Entities;
using formationApi.data.models;
using formationApi.dtos.request;
using formationApi.services.TokenService;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace formationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
       
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly ITokenService _tokenService;

        public AuthController(
            UserManager<AppUser> userManager,
            ITokenService tokenService,
            RoleManager<AppRole> roleManager)
                {

                    _userManager = userManager;
                    _tokenService = tokenService;
                    _roleManager = roleManager;
                }


        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            try
            {
                if (await UserExists(dto.Username)) return BadRequest("Username is taken");

                var user = new AppUser()
                {
                    UserName = dto.Username.ToLower(),
                    Email = dto.Email
                };
                var result = await _userManager.CreateAsync(user, dto.Password);
                
                // If creation failed, return the errors
                if (!result.Succeeded)
                    return BadRequest(result.Errors);

                // Assign the default role 'Member' to the new user
                var roleExists = await _roleManager.RoleExistsAsync("Member");

                if (!roleExists)
                {
                    // If the role doesn't exist, create it
                    await _roleManager.CreateAsync(new AppRole() { Name = "Member"});
                }

                await _userManager.AddToRoleAsync(user, "Member");

                // Return success response
                return Ok(new
                {
                    message = "User registered successfully",
                    username = user.UserName,
                    Token = await _tokenService.CreateToken(user),
                });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            // Normalize the input for lookup
            string normalizedInput = dto.Username.ToUpper();

            var user = await _userManager.Users
                  .FirstOrDefaultAsync(x =>
                      x.NormalizedUserName == normalizedInput ||
                      x.NormalizedEmail == normalizedInput);

            if (user == null || (user.UserName == null && user.Email == null))
            {
                return Unauthorized("Invalid username or email.");
            }

            if (!await _userManager.CheckPasswordAsync(user, dto.Password))
            {
                return Unauthorized("Invalid username/email or password.");
            }

            // Get user roles
            var roles = await _userManager.GetRolesAsync(user);
            var redirectUrl = GetRedirectUrlByRole(roles.FirstOrDefault());

            return Ok(new
            {
                Username = user.UserName,
                Email = user.Email,
                Token = await _tokenService.CreateToken(user),
                RedirectUrl = redirectUrl
            });
        }

        private string GetRedirectUrlByRole(string role)
        {
            return role switch
            {
                "Administrator" => "/admin",
                "Manager" => "/manager",
                "HierarchicalLeader" => "/hierarchical-leader",
                "TeamLeader" => "/team-leader",
                "PostLeader" => "/post-leader",
                "QualityAgent" => "/quality-agent",
                "Employee" => "/employee",
                _ => "/employee" // Default redirect for unknown roles
            };
        }

        private async Task<bool> UserExists(string username)
        {
            return await _userManager.Users.AnyAsync(x => x.NormalizedUserName == username.ToUpper()); 
        }
    }
}


