using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using formationApi.data.Entities;
using formationApi.data.Repositories;
using formationApi.services.CloudService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.FileIO;

namespace formationApi.Controllers
{
	public class AttachmentController : BaseApiController
	{
        private readonly ICloudService _cloudService;
        private readonly IRepositoryWrapper _repositoryWrapper;

        public AttachmentController(IRepositoryWrapper repositoryWrapper, ICloudService cloudService)
        {
            _repositoryWrapper = repositoryWrapper;
            _cloudService = cloudService;
        }

        /// <summary>
        /// Add a new attachment to a module by uploading a file (Admin only)
        /// </summary>
        /// <param name="moduleId">The ID of the module to attach to</param>
        /// <param name="attachmentDto">The attachment details including the file</param>
        /// <returns>The created attachment</returns>
        [Authorize(Roles = "Administrator")]
        [HttpPost("module/{moduleId}")]
        public async Task<ActionResult> AddAttachmentToModule(int moduleId, [FromForm] UploadAttachmentDto attachmentDto)
        {
            // Validate the model
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Validate the Module exists
            var module = await _repositoryWrapper.Module.Get(moduleId);
            if (module == null)
                return NotFound($"Module with ID {moduleId} not found.");

            // Validate the file
            if (attachmentDto.File == null || attachmentDto.File.Length == 0)
                return BadRequest("No file uploaded or file is empty.");

            try
            {
                string fileType;
                // Upload the file to Cloudinary
                string secureUrl;
                using (var stream = attachmentDto.File.OpenReadStream())
                {
                    secureUrl = await _cloudService.UploadFileAsync(stream, attachmentDto.File.FileName, "modules");
                    fileType = DetectFileType(stream);
                }

                // Create the Attachment
                var attachment = new Attachment
                {
                    Lien = secureUrl, // Use the secure URL from Cloudinary
                    Type = fileType,
                    ModuleId = moduleId,
                    UpdatedAt = DateTime.Now.ToUniversalTime()
                };

                // Save the Attachment
                var createdAttachment = await _repositoryWrapper.Attachment.Create(attachment);

                // Map to DTO for response
                var attachmentResponse = new
                {
                    Id = createdAttachment.Id,
                    Lien = createdAttachment.Lien,
                    Type = createdAttachment.Type,
                    ModuleId = createdAttachment.ModuleId
                };

                return CreatedAtAction(nameof(GetAttachment), new { id = createdAttachment.Id }, attachmentResponse);
            }
            catch (Exception ex)
            {
                // Log the exception (you can use a logging framework like Serilog or ILogger)
                return StatusCode(500, new { message = "Failed to upload file to Cloudinary.", details = ex.Message });
            }
        }
        /// <summary>
        /// Get an attachment by ID
        /// </summary>
        /// <param name="id">The ID of the attachment</param>
        /// <returns>The attachment</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult> GetAttachment(int id)
        {
            var attachment = await _repositoryWrapper.Attachment.Get(id);
            if (attachment == null)
                return NotFound($"Attachment with ID {id} not found.");

            var attachmentDto = new
            {
                attachment.Id,
                attachment.Lien,
                attachment.Type,
                attachment.ModuleId
            };

            return Ok(attachmentDto);
        }

        public class UploadAttachmentDto
        {
            [Required(ErrorMessage = "File is required.")]
            public IFormFile File { get; set; }
        }

        /// <summary>
        /// Detect the file type based on the file's content (magic numbers) and map to allowed types
        /// </summary>
        /// <param name="stream">The file stream</param>
        /// <returns>The mapped file type (e.g., "pdf", "video", "image", "doc") or null if unsupported</returns>
        private string DetectFileType(Stream stream)
        {
            try
            {
                // Reset stream position to the beginning
                stream.Position = 0;

                // Read the first few bytes to check the file signature
                byte[] buffer = new byte[4];
                stream.Read(buffer, 0, 4);

                // Reset stream position for the upload
                stream.Position = 0;

                // Check file signatures (magic numbers)
                if (buffer[0] == 0x25 && buffer[1] == 0x50 && buffer[2] == 0x44 && buffer[3] == 0x46) // PDF: %PDF
                    return "pdf";
                if (buffer[0] == 0xFF && buffer[1] == 0xD8 && buffer[2] == 0xFF) // JPEG: FF D8 FF
                    return "image";
                if (buffer[0] == 0x89 && buffer[1] == 0x50 && buffer[2] == 0x4E && buffer[3] == 0x47) // PNG: 89 50 4E 47
                    return "image";
                if (buffer[0] == 0x50 && buffer[1] == 0x4B && buffer[2] == 0x03 && buffer[3] == 0x04) // DOCX: PK (ZIP format)
                    return "doc";
                if (buffer[0] == 0xD0 && buffer[1] == 0xCF && buffer[2] == 0x11 && buffer[3] == 0xE0) // DOC: D0 CF 11 E0
                    return "doc";
                if (buffer[0] == 0x00 && buffer[1] == 0x00 && buffer[2] == 0x01 && buffer[3] == 0x00) // MP4: Often starts with 00 00 01 (simplified)
                    return "video";

                // Additional check for MP4/MOV (which often have "ftyp" at offset 4)
                if (stream.Length > 8)
                {
                    stream.Position = 4;
                    byte[] ftypBuffer = new byte[4];
                    stream.Read(ftypBuffer, 0, 4);
                    stream.Position = 0;
                    if (ftypBuffer[0] == 0x66 && ftypBuffer[1] == 0x74 && ftypBuffer[2] == 0x79 && ftypBuffer[3] == 0x70) // "ftyp"
                        return "video";
                }

                return null; // Unsupported file type
            }
            catch
            {
                return null;
            }
        }
    }
}

