using formationApi.data;
using formationApi.data.Repositories;
using formationApi.data.Repositories.FormationRepo;
using formationApi.services.CloudService;
using formationApi.services.EmailService;
using formationApi.services.TokenService;
using Microsoft.EntityFrameworkCore;

namespace formationApi.Extensions
{
	public static class ApplicationServiceExtensions
	{
        public static IServiceCollection AddApplicationServices(this IServiceCollection services ,IConfiguration config)
        {
            services.AddDbContext<ApplicationContext>(options =>
                options.UseNpgsql(config.GetConnectionString("DefaultConnection")));



            services.AddScoped<ITokenService, TokenService>();


            services.Configure<EmailSettings>(config.GetSection("EmailSettings"));
            services.AddScoped<IEmailService, EmailService>();


            // Add Cloudinary settings from appsettings.json
            services.Configure<CloudinarySettings>(
                config.GetSection("CloudinarySettings"));

            // Register the Cloudinary service
            services.AddScoped<ICloudService, CloudinaryService>();

            services.AddScoped<IRepositoryWrapper,RepositoryWrapper>();

            return services;
        }
	}
}

