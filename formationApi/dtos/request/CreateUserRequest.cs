using System;
using formationApi.data.Entities;
using System.ComponentModel.DataAnnotations;

namespace formationApi.dtos.request
{
    /// <summary>
    /// Request model for creating a new user.
    /// </summary>
    public class CreateUserRequest
    {
        /// <summary>
        /// The username of the new user.
        /// </summary>
        [Required(ErrorMessage = "Username is required.")]
        public string Username { get; set; }

        /// <summary>
        /// The email address of the new user.
        /// </summary>
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string Email { get; set; }

        /// <summary>
        /// The role to assign to the new user. Must be one of: Administrator, HierarchicalLeader, TeamLeader, PostLeader, QualityAgent, Manager, Employee.
        /// </summary>
        [Required(ErrorMessage = "Role is required.")]
        [EnumDataType(typeof(UserRole), ErrorMessage = "Invalid role. Must be one of: Administrator, HierarchicalLeader, TeamLeader, PostLeader, QualityAgent, Manager, Employee.")]
        public string Role { get; set; }


        /// <summary>
        /// The ID of the group to assign the user to (optional).
        /// </summary>
        public int? GroupId { get; set; } // Nullable, so it can be omitted
    }
}

