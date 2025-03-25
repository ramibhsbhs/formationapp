using System;
using formationApi.services.CloudService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace formationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ICloudService _cloudinaryService;

        public TestController(ICloudService cloudinaryService)
        {
            _cloudinaryService = cloudinaryService;
        }

        /// <summary>
        /// Uploads a file to Cloudinary and returns the secure URL.
        /// </summary>
        /// <param name="file">The file to upload.</param>
        /// <param name="folder">The Cloudinary folder to store the file (optional, defaults to "test_uploads").</param>
        /// <returns>The secure URL of the uploaded file.</returns>
        /// <response code="200">File uploaded successfully, returns the URL.</response>
        /// <response code="400">No file provided or invalid request.</response>
        /// <response code="500">Failed to upload the file to Cloudinary.</response>
        [HttpPost("upload")]
        [AllowAnonymous]
        public async Task<IActionResult> UploadFile([FromForm] IFormFile file, [FromQuery] string folder = "test_uploads")
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file provided or file is empty.");
            }

            try
            {
                using var stream = file.OpenReadStream();
                string fileUrl = await _cloudinaryService.UploadFileAsync(
                    fileStream: stream,
                    fileName: file.FileName, // Use original filename for public ID
                    folder: folder
                );

                return Ok(new { Url = fileUrl });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to upload file: {ex.Message}");
            }
        }
    }
}

