using System;
namespace formationApi.data.Entities
{
   public enum UserRole
    {
        Administrator, // Administrateurs Equipe PK (Amélioration continue)
        HierarchicalLeader, // Chef hiérarchique (Groupe Leaders)
        TeamLeader, // Chefs d’équipes
        PostLeader, // Chefs de postes
        QualityAgent, // Agents qualités
        Manager // Manager
    }
}

