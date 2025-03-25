using System;
namespace formationApi.services.EmailService
{
    /// <summary>
    /// Configuration settings for SMTP email sending.
    /// </summary>
    public class EmailSettings
    {
        /// <summary>
        /// The SMTP server hostname (e.g., smtp.gmail.com).
        /// </summary>
        public string SmtpServer { get; set; }

        /// <summary>
        /// The SMTP server port (e.g., 587 for TLS).
        /// </summary>
        public int SmtpPort { get; set; }

        /// <summary>
        /// The display name of the sender.
        /// </summary>
        public string SenderName { get; set; }

        /// <summary>
        /// The sender's email address.
        /// </summary>
        public string SenderEmail { get; set; }

        /// <summary>
        /// The SMTP username for authentication.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// The SMTP password or app-specific password for authentication.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Indicates whether SSL/TLS should be enabled for the SMTP connection.
        /// </summary>
        public bool EnableSsl { get; set; }
    }
}

