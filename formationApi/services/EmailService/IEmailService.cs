using System;
namespace formationApi.services.EmailService
{
    public interface IEmailService
    {
        Task SendEmailAsync(string toEmail, string subject, string body, bool isHtml = false);
        Task SendWithTemplate(SendTemplatedEmailRequest emailRequest);
    }
}

