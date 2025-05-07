using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace formationApi.Migrations
{
    /// <inheritdoc />
    public partial class AddAttemptTypeToUserQuizAttempt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AttemptType",
                table: "UserQuizAttempts",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ModuleId",
                table: "UserQuizAttempts",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserQuizAttempts_ModuleId",
                table: "UserQuizAttempts",
                column: "ModuleId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserQuizAttempts_Modules_ModuleId",
                table: "UserQuizAttempts",
                column: "ModuleId",
                principalTable: "Modules",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserQuizAttempts_Modules_ModuleId",
                table: "UserQuizAttempts");

            migrationBuilder.DropIndex(
                name: "IX_UserQuizAttempts_ModuleId",
                table: "UserQuizAttempts");

            migrationBuilder.DropColumn(
                name: "AttemptType",
                table: "UserQuizAttempts");

            migrationBuilder.DropColumn(
                name: "ModuleId",
                table: "UserQuizAttempts");
        }
    }
}
