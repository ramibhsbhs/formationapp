using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace formationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        [HttpGet("admin")]
        [Authorize(Roles = "Admin")]
        public IActionResult Test()
        {
            return Ok("Hello, authenticated Admin!");
        }

        [HttpGet("member")]
        [Authorize(Roles = "Member")]
        public IActionResult Test2()
        {
            return Ok("Hello, authenticated Admin!");
        }
    }
}

