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
        [Authorize(Roles = "Administrator")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAttachment(int id)
        {
            var attachment = await _repositoryWrapper.Attachment.Get(id);
            if (attachment == null)
                return NotFound($"Attachment with ID {id} not found.");

            await _repositoryWrapper.Attachment.Delete(attachment.Id);

            return NoContent();
        }

        public class UploadAttachmentDto
        {
            [Required(ErrorMessage = "File is required.")]
            public IFormFile File { get; set; }
        }

        /// <summary>
        /// Detect the file type based on the file's content (magic numbers) and return specific file extension
        /// </summary>
        /// <param name="stream">The file stream</param>
        /// <returns>The specific file type extension (e.g., "pdf", "jpg", "png", "docx") or null if unsupported</returns>
        private static string DetectFileType(Stream stream)
        {
            try
            {
                // Reset stream position to the beginning
                stream.Position = 0;

                // Read the first few bytes to check the file signature
                byte[] buffer = new byte[8]; // Increased to 8 bytes for more signatures
                stream.Read(buffer, 0, buffer.Length);

                // Reset stream position for the upload
                stream.Position = 0;

                // PDF: %PDF
                if (buffer[0] == 0x25 && buffer[1] == 0x50 && buffer[2] == 0x44 && buffer[3] == 0x46)
                    return "pdf";

                // JPEG: FF D8 FF
                if (buffer[0] == 0xFF && buffer[1] == 0xD8 && buffer[2] == 0xFF)
                    return "jpg";

                // PNG: 89 50 4E 47
                if (buffer[0] == 0x89 && buffer[1] == 0x50 && buffer[2] == 0x4E && buffer[3] == 0x47)
                    return "png";

                // GIF: GIF8
                if (buffer[0] == 0x47 && buffer[1] == 0x49 && buffer[2] == 0x46 && buffer[3] == 0x38)
                    return "gif";

                // ZIP format (could be DOCX, XLSX, PPTX) - need additional checks
                if (buffer[0] == 0x50 && buffer[1] == 0x4B && buffer[2] == 0x03 && buffer[3] == 0x04)
                {
                    // For Office files, we need to check the file content more deeply
                    // This is a simplified approach - in production, you might want to use a library
                    stream.Position = 0;
                    using (var zip = new System.IO.Compression.ZipArchive(stream, System.IO.Compression.ZipArchiveMode.Read, true))
                    {
                        foreach (var entry in zip.Entries)
                        {
                            // Check for Word document
                            if (entry.FullName.Contains("word/"))
                                return "docx";

                            // Check for Excel workbook
                            if (entry.FullName.Contains("xl/"))
                                return "xlsx";

                            // Check for PowerPoint presentation
                            if (entry.FullName.Contains("ppt/"))
                                return "pptx";
                        }
                    }

                    // Reset stream position after ZIP inspection
                    stream.Position = 0;

                    // If we couldn't determine the specific Office format, return a generic one
                    return "zip";
                }

                // Legacy Office formats (DOC, XLS, PPT) - Compound File Binary Format
                if (buffer[0] == 0xD0 && buffer[1] == 0xCF && buffer[2] == 0x11 && buffer[3] == 0xE0)
                {
                    // For a more accurate detection, we would need to parse the OLE structure
                    // This is a simplified approach based on common patterns

                    // Check for PowerPoint marker
                    if (ContainsBytes(stream, "PowerPoint"u8.ToArray()))
                        return "ppt";

                    // Check for Excel marker
                    if (ContainsBytes(stream, "Microsoft Excel"u8.ToArray()))
                        return "xls";

                    // Default to Word if no other markers found
                    return "doc";
                }

                // MP4: Often starts with specific patterns
                if (buffer[0] == 0x00 && buffer[1] == 0x00 && buffer[2] == 0x01 && (buffer[3] == 0xBA || buffer[3] == 0xB3))
                    return "mp4";

                // Check for MP4/MOV (which often have "ftyp" at offset 4)
                if (stream.Length > 8)
                {
                    // Check for "ftyp" marker
                    if (buffer[4] == 0x66 && buffer[5] == 0x74 && buffer[6] == 0x79 && buffer[7] == 0x70)
                    {
                        // Check for specific ftyp codes to differentiate between MP4 and MOV
                        stream.Position = 8;
                        byte[] ftypCodeBuffer = new byte[4];
                        stream.Read(ftypCodeBuffer, 0, 4);
                        stream.Position = 0;

                        // Common MP4 ftyp codes
                        if (IsMatch(ftypCodeBuffer, "mp42"u8.ToArray()) || // mp42
                            IsMatch(ftypCodeBuffer, "isom"u8.ToArray()) || // isom
                            IsMatch(ftypCodeBuffer, "mp41"u8.ToArray()))   // mp41
                            return "mp4";

                        // Common MOV ftyp codes
                        if (IsMatch(ftypCodeBuffer, "qt  "u8.ToArray()))   // qt
                            return "mov";

                        // Default to mp4 if we can't determine specifically
                        return "mp4";
                    }
                }

                // AVI: RIFF header followed by AVI
                if (buffer[0] == 0x52 && buffer[1] == 0x49 && buffer[2] == 0x46 && buffer[3] == 0x46 &&
                    buffer[8] == 0x41 && buffer[9] == 0x56 && buffer[10] == 0x49 && buffer[11] == 0x20)
                    return "avi";

                return null; // Unsupported file type
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Error detecting file type: {ex.Message}");
                return null;
            }
        }

        /// <summary>
        /// Check if a stream contains a specific byte sequence
        /// </summary>
        private static bool ContainsBytes(Stream stream, byte[] sequence)
        {
            // Save original position
            long originalPosition = stream.Position;

            try
            {
                // Buffer for reading
                byte[] buffer = new byte[4096];
                int bytesRead;
                int matchIndex = 0;

                // Reset to beginning
                stream.Position = 0;

                // Read through the stream
                while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
                {
                    for (int i = 0; i < bytesRead; i++)
                    {
                        if (buffer[i] == sequence[matchIndex])
                        {
                            matchIndex++;
                            if (matchIndex == sequence.Length)
                                return true;
                        }
                        else
                        {
                            matchIndex = 0;
                        }
                    }
                }

                return false;
            }
            finally
            {
                // Restore original position
                stream.Position = originalPosition;
            }
        }

        /// <summary>
        /// Check if two byte arrays match
        /// </summary>
        private static bool IsMatch(byte[] array1, byte[] array2)
        {
            if (array1.Length != array2.Length)
                return false;

            for (int i = 0; i < array1.Length; i++)
            {
                if (array1[i] != array2[i])
                    return false;
            }

            return true;
        }
    }
}

