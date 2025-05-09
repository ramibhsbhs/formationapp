using formationApi.data.Entities;
using formationApi.data.models;

namespace formationApi.dtos.response
{
    public class DashboardDto
    {
        // Statistiques générales
        public int TotalUsers { get; set; }
        public int TotalFormations { get; set; }
        public int TotalSessions { get; set; }
        public int TotalModules { get; set; }
        public int TotalGroups { get; set; }
        public int TotalFeedbacks { get; set; }
        public int TotalCertifications { get; set; }
        public int TotalQuizzes { get; set; }
        public int TotalQuizAttempts { get; set; }

        // Statistiques supplémentaires
        public List<CategoryStatDto> FormationsByCategory { get; set; } = new List<CategoryStatDto>();
        public List<MonthlyStatDto> QuizAttemptsOverTime { get; set; } = new List<MonthlyStatDto>();
        public List<RatingStatDto> FeedbackRatings { get; set; } = new List<RatingStatDto>();
        public List<TopItemDto> TopFormations { get; set; } = new List<TopItemDto>();
    }

    public class SupervisorDashboardDto
    {
        // Statistiques du groupe
        public int GroupId { get; set; }
        public string GroupName { get; set; }
        public int TotalGroupMembers { get; set; }
        public int TotalGroupFormations { get; set; }
        public int TotalGroupCertifications { get; set; }
        public int TotalGroupQuizAttempts { get; set; }
        public double AverageGroupScore { get; set; }
        
        // Statistiques détaillées
        public List<UserProgressDto> UserProgress { get; set; } = new List<UserProgressDto>();
        public List<MonthlyStatDto> GroupAttemptsOverTime { get; set; } = new List<MonthlyStatDto>();
        public List<TopItemDto> TopGroupFormations { get; set; } = new List<TopItemDto>();
    }

    public class CandidateDashboardDto
    {
        // Statistiques personnelles
        public int TotalFormationsEnrolled { get; set; }
        public int TotalFormationsCompleted { get; set; }
        public int TotalCertificationsEarned { get; set; }
        public int TotalQuizAttempts { get; set; }
        public double AverageScore { get; set; }
        
        // Statistiques détaillées
        public List<FormationProgressDto> FormationProgress { get; set; } = new List<FormationProgressDto>();
        public List<MonthlyStatDto> AttemptsOverTime { get; set; } = new List<MonthlyStatDto>();
    }

    // Classes utilitaires pour les statistiques
    public class CategoryStatDto
    {
        public string Category { get; set; }
        public int Count { get; set; }
    }

    public class MonthlyStatDto
    {
        public string Month { get; set; }
        public int Count { get; set; }
    }

    public class RatingStatDto
    {
        public double Rating { get; set; }
        public int Count { get; set; }
    }

    public class TopItemDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Count { get; set; }
    }

    public class UserProgressDto
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int FormationsCompleted { get; set; }
        public int CertificationsEarned { get; set; }
        public double AverageScore { get; set; }
    }

    public class FormationProgressDto
    {
        public int FormationId { get; set; }
        public string FormationTitle { get; set; }
        public int ModulesCompleted { get; set; }
        public int TotalModules { get; set; }
        public bool FinalQuizPassed { get; set; }
        public double? Score { get; set; }
    }
}
