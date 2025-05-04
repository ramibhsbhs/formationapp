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

        public DbSet<Certification> Certifications { get; set; }

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
            builder.Entity<UserQuizAttempt>(entity =>
                {
                    entity.HasKey(e => e.Id);

                    entity.HasOne(e => e.User)
                            .WithMany() // or `.WithMany(u => u.UserQuizAttempts)` if you have a collection in AppUser
                            .HasForeignKey(e => e.UserId)
                            .OnDelete(DeleteBehavior.Cascade);

                    entity.HasOne(e => e.Quiz)
                            .WithMany() // or `.WithMany(q => q.UserQuizAttempts)` if you have a collection in Quiz
                            .HasForeignKey(e => e.QuizId)
                            .OnDelete(DeleteBehavior.Cascade);

                    entity.HasMany(e => e.QuestionResponses)
                            .WithOne(qr => qr.UserQuizAttempt)
                            .HasForeignKey(qr => qr.UserQuizAttemptId)
                            .OnDelete(DeleteBehavior.Cascade);

                    entity.HasOne(uqa => uqa.Session)
                        .WithMany()
                        .HasForeignKey(uqa => uqa.SessionId)
                        .OnDelete(DeleteBehavior.Restrict);
                });

            builder.Entity<UserQuestionResponse>(entity =>
                {
                    entity.HasKey(e => e.Id);

                    entity.HasOne(e => e.UserQuizAttempt)
                        .WithMany(uqa => uqa.QuestionResponses)
                        .HasForeignKey(e => e.UserQuizAttemptId)
                        .OnDelete(DeleteBehavior.Cascade);

                    entity.HasOne(e => e.Question)
                        .WithMany() // or `.WithMany(q => q.UserQuestionResponses)` if you have a collection in Question
                        .HasForeignKey(e => e.QuestionId)
                        .OnDelete(DeleteBehavior.Cascade);

                    // Configure SelectedAnswerIds to be stored as JSON
                    entity.Property(e => e.SelectedAnswerIds)
                        .HasConversion(
                            v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                            v => JsonSerializer.Deserialize<List<int>>(v, (JsonSerializerOptions)null)
                        );
                });

            // Configure Certification relationships

            builder.Entity<Certification>()
                .HasOne(c => c.User)
                .WithMany() // Assuming AppUser does not have a navigation property for Certifications
                .HasForeignKey(c => c.UserId)
                .OnDelete(DeleteBehavior.Restrict); // Restrict delete: prevent User deletion if they have Certifications

            builder.Entity<Certification>()
                .HasOne(c => c.Session)
                .WithMany() // Assuming Session does not have a navigation property for Certifications
                .HasForeignKey(c => c.SessionId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }



}

