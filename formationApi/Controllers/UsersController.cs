using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using formationApi.data.Entities;
using formationApi.Extensions;
using formationApi.services.EmailService;
using formationApi.data.models;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography;
using formationApi.data.Repositories;

namespace formationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {

        private readonly IEmailService _emailService;
        private readonly UserManager<AppUser> _userManager;
        private readonly IRepositoryWrapper _repositoryWrapper;

        public UsersController(IEmailService emailService, UserManager<AppUser> userManager, IRepositoryWrapper repositoryWrapper)
        {
            _emailService = emailService;
            _userManager = userManager;
            _repositoryWrapper = repositoryWrapper;
        }
        /// <summary>
        /// Creates a new user with the specified username, email, and role, and sends them a welcome email with credentials.
        /// </summary>
        /// <param name="request">The request containing username, email, and role.</param>
        /// <returns>An IActionResult indicating the result of the operation.</returns>
        /// <response code="200">User created successfully and email sent.</response>
        /// <response code="400">Invalid request data (e.g., missing fields or invalid role).</response>
        /// <response code="403">User is not authorized to create users (not an admin).</response>
        /// <response code="500">Failed to create user or send email.</response>
        [HttpPost("create-user")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            // Generate a random password
            string generatedPassword = GenerateRandomPassword();

            // Check if GroupId is provided and valid
            Group group = null;
            if (request.GroupId.HasValue)
            {
                group = await _repositoryWrapper.Group.Get(request.GroupId.Value);
                if (group == null)
                {
                    return BadRequest($"Group with ID {request.GroupId.Value} not found.");
                }
            }

            // Create the new user
            var newUser = new AppUser
            {
                UserName = request.Username,
                Email = request.Email,
                GroupId = request.GroupId // Assign GroupId (can be null)
            };

            var createResult = await _userManager.CreateAsync(newUser, generatedPassword);
            if (!createResult.Succeeded)
            {
                var errors = string.Join(", ", createResult.Errors.Select(e => e.Description));
                return StatusCode(500, $"Failed to create user: {errors}");
            }

            // Assign the role to the new user
            var roleResult = await _userManager.AddToRoleAsync(newUser, request.Role);
            if (!roleResult.Succeeded)
            {
                var errors = string.Join(", ", roleResult.Errors.Select(e => e.Description));
                await _userManager.DeleteAsync(newUser); // Rollback user creation on failure
                return StatusCode(500, $"Failed to assign role: {errors}");
            }
            // If group is specified, update the group's Users collection
            if (group != null)
            {
                group.Users.Add(newUser);
                await _repositoryWrapper.Group.Update(group);
            }
            // Prepare email variables
            var emailVariables = new Dictionary<string, string>
            {
                { "firstname", request.Username }, // Assuming username as firstname
                { "email", request.Email },
                { "password", generatedPassword },
                { "loginUrl", "https://yourapp.com/login" },
                { "supportUrl", "https://yourapp.com/support" },
                { "privacyUrl", "https://yourapp.com/privacy" }
            };

            // Send welcome email with template
            try
            {
                var emailRequest = new SendTemplatedEmailRequest
                {
                    ToEmail = request.Email,
                    Subject = "Bienvenue chez Votre Entreprise !",
                    TemplatePath = "templates/WelcomeEmail.html",
                    Variables = emailVariables
                };

                await _emailService.SendWithTemplate(emailRequest);
                return Ok(newUser.ToDto());
            }
            catch (Exception ex)
            {
                await _userManager.DeleteAsync(newUser); // Rollback if email fails
                return StatusCode(500, $"User created, but failed to send email: {ex.Message}");
            }
        }

        /// <summary>
        /// Generates a random password with a mix of letters, numbers, and special characters.
        /// </summary>
        /// <returns>A randomly generated password.</returns>
        private string GenerateRandomPassword(int length = 12)
        {
            const string validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            var random = new Random();
            var bytes = new byte[length];
            RandomNumberGenerator.Fill(bytes);

            char[] password = new char[length];
            for (int i = 0; i < length; i++)
            {
                password[i] = validChars[bytes[i] % validChars.Length];
            }
            return "Pa$$w0rd";
        }





    }
}

