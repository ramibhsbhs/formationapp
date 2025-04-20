using System;
using System.Reflection.Emit;
using formationApi.data.Entities;
using formationApi.data.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace formationApi.data
{
	public class ApplicationContext : IdentityDbContext<AppUser, AppRole, int,
        IdentityUserClaim<int>, AppUserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>,
        IdentityUserToken<int>>
    {
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Formation> Formations { get; set; }
        public DbSet<Group> Groups { get; set; }

        public DbSet<Module> Modules { get; set; }
        public DbSet<Attachment> Attachments { get; set; }


        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AppUser>()
               .HasMany(ur => ur.UserRoles)
               .WithOne(u => u.User)
               .HasForeignKey(ur => ur.UserId)
               .IsRequired();

            builder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
            .IsRequired();

            builder.Entity<Group>()
              .HasMany(g => g.Users)
              .WithOne(u => u.Group)
              .HasForeignKey(u => u.GroupId)
              .IsRequired(false);

            builder.Entity<Notification>()
                .HasOne(n => n.User)
                .WithMany(e => e.Notifications)
                .HasForeignKey(n => n.UserId);

            builder.Entity<Feedback>()
                .HasOne(f => f.User)
                .WithMany(e => e.Feedbacks)
                .HasForeignKey(f => f.UserId);

            //builder.Entity<Session>()
            //    .HasOne(s => s.Formation)
            //    .WithMany(f => f.Sessions)
            //    .HasForeignKey(f => f.FormationId);

            builder.Entity<Formation>()
                .HasMany(f => f.Modules)
                .WithOne(m => m.Formation)
                .HasForeignKey(m => m.FormationId)
                .IsRequired();
            builder.Entity<Formation>()
              .HasMany(f => f.Groups)
              .WithMany(g => g.Formations);
            builder.Entity<Module>()
                .HasMany(m => m.Attachments)
                .WithOne(a => a.Module)
                .HasForeignKey(a => a.ModuleId)
                .IsRequired();

            // Ensure Position is unique within a Formation
            builder.Entity<Module>()
                .HasIndex(m => new { m.FormationId, m.Position })
                .IsUnique();

        }
    }
	
		
	
}

