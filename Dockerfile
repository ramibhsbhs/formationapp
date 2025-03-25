# Use the .NET runtime image as the base
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80  # Adjust if your app uses a different port (e.g., 5000)

# Use the SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
# Copy the solution and project files
COPY ["formationApi/formationApi.csproj", "formationApi/"]
# Restore dependencies
RUN dotnet restore "formationApi/formationApi.csproj"
# Copy the rest of the source code
COPY . .
WORKDIR "/src/formationApi"
RUN dotnet build "formationApi.csproj" -c Release -o /app/build

# Publish the app
FROM build AS publish
RUN dotnet publish "formationApi.csproj" -c Release -o /app/publish

# Final runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "formationApi.dll"]
