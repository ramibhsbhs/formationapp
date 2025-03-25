namespace formationApi.services.EmailService
{
    /// <summary>
    /// Request model for sending a templated email.
    /// </summary>
    public class SendTemplatedEmailRequest
    {
        /// <summary>
        /// The recipient's email address.
        /// </summary>
        public string ToEmail { get; set; }

        /// <summary>
        /// The subject line of the email.
        /// </summary>
        public string Subject { get; set; }

        /// <summary>
        /// The relative path to the HTML template file (e.g., "wwwroot/Templates/WelcomeEmail.html").
        /// </summary>
        public string TemplatePath { get; set; }

        /// <summary>
        /// A dictionary of variables to replace placeholders in the template.
        /// </summary>
        public Dictionary<string, string> Variables { get; set; }
    }
}

