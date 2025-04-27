using System;
using System.Reflection.Emit;
using System.Text.Json;
using formationApi.data.Entities;
using formationApi.data.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

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

        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<UserQuizAttempt> UserQuizAttempts { get; set; }
        public DbSet<UserQuestionResponse> UserQuestionResponses { get; set; }

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

            // Feedback relationships
            builder.Entity<Feedback>()
                .HasOne(f => f.User)
                .WithMany(e => e.Feedbacks)
                .HasForeignKey(f => f.UserId);

            builder.Entity<Feedback>()
                .HasOne(f => f.Formation)
                .WithMany() // No inverse navigation on Formation
                .HasForeignKey(f => f.FormationId)
                .IsRequired();

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

            builder.Entity<Formation>()
                .HasMany(f => f.Roles)
                .WithMany() // No inverse nav property on AppRole
                .UsingEntity(j => j.ToTable("FormationRoles"));



            builder.Entity<Module>()
                .HasMany(m => m.Attachments)
                .WithOne(a => a.Module)
                .HasForeignKey(a => a.ModuleId)
                .IsRequired();

            // Ensure Position is unique within a Formation
            builder.Entity<Module>()
                .HasIndex(m => new { m.FormationId, m.Position })
                .IsUnique();

            // Configure Quiz and Question relationship
            builder.Entity<Quiz>()
                .HasMany(q => q.Questions)
                .WithOne(q => q.Quiz)
                .HasForeignKey(q => q.QuizId)
                .IsRequired();

            // Configure Question and Answer relationship
            builder.Entity<Question>()
                .HasMany(q => q.Answers)
                .WithOne(a => a.Question)
                .HasForeignKey(a => a.QuestionId)
                .IsRequired();


            modelBuilder.Entity<UserQuizAttempt>(entity =>
            {
                // Table name (already specified via [Table] attribute, but explicit here for clarity)
                entity.ToTable("UserQuizAttempts");

                // Primary key (assuming BaseEntity has Id)
                entity.HasKey(e => e.Id);

                // Properties
                entity.Property(e => e.UserId)
                    .IsRequired();

                entity.Property(e => e.QuizId)
                    .IsRequired();

                entity.Property(e => e.StartTime)
                    .IsRequired()
                    .HasColumnType("datetime");

                entity.Property(e => e.AttemptedAt)
                    .HasColumnType("datetime");

                entity.Property(e => e.IsCompleted)
                    .IsRequired()
                    .HasDefaultValue(false);

                entity.Property(e => e.Score)
                    .HasColumnType("float");

                entity.Property(e => e.HasPassed)
                    .IsRequired()
                    .HasDefaultValue(false);

                // Relationships
                entity.HasOne(e => e.User)
                    .WithMany() // Assuming AppUser doesn't have a navigation property back
                    .HasForeignKey(e => e.UserId)
                    .OnDelete(DeleteBehavior.Restrict); // Prevent cascade delete

                entity.HasOne(e => e.Quiz)
                    .WithMany() // Assuming Quiz doesn't have a navigation property back
                    .HasForeignKey(e => e.QuizId)
                    .OnDelete(DeleteBehavior.Restrict);

                // One-to-many with UserQuestionResponse
                entity.HasMany(e => e.QuestionResponses)
                    .WithOne(r => r.UserQuizAttempt)
                    .HasForeignKey(r => r.UserQuizAttemptId)
                    .OnDelete(DeleteBehavior.Cascade); // Delete responses if attempt is deleted
            });

            // Configure UserQuestionResponse
            modelBuilder.Entity<UserQuestionResponse>(entity =>
            {
                // Table name
                entity.ToTable("UserQuestionResponses");

                // Primary key
                entity.HasKey(e => e.Id);

                // Properties
                entity.Property(e => e.UserQuizAttemptId)
                    .IsRequired();

                entity.Property(e => e.QuestionId)
                    .IsRequired();

                // Configure SelectedAnswerIds as JSON
                entity.Property(e => e.SelectedAnswerIds)
                    .IsRequired()
                    .HasColumnType("json") // Use 'jsonb' for PostgreSQL, 'nvarchar(max)' for SQL Server if needed
                    .HasConversion(
                        v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                        v => JsonSerializer.Deserialize<List<int>>(v, (JsonSerializerOptions)null),
                        new ValueComparer<List<int>>(
                            (c1, c2) => c1 != null && c2 != null && c1.SequenceEqual(c2),
                            c => c != null ? c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())) : 0,
                            c => c != null ? c.ToList() : new List<int>()
                        )
                    );

                // Relationships
                entity.HasOne(e => e.UserQuizAttempt)
                    .WithMany(u => u.QuestionResponses)
                    .HasForeignKey(e => e.UserQuizAttemptId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(e => e.Question)
                    .WithMany() // Assuming Question doesn't have a navigation property back
                    .HasForeignKey(e => e.QuestionId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

        }
    }



}

