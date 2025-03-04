using System;
using formationApi.data.models;

namespace formationApi.services.TokenService
{
	public interface ITokenService
	{
        Task<string> CreateToken(AppUser user);
    }
}

