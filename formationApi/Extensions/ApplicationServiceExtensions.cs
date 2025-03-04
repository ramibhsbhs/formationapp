using System;
using formationApi.data;
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

            return services;
        }
	}
}

