using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace formationApi.Migrations
{
    /// <inheritdoc />
    public partial class newmig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SessionId",
                table: "UserQuizAttempts",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_UserQuizAttempts_SessionId",
                table: "UserQuizAttempts",
                column: "SessionId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserQuizAttempts_Sessions_SessionId",
                table: "UserQuizAttempts",
                column: "SessionId",
                principalTable: "Sessions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserQuizAttempts_Sessions_SessionId",
                table: "UserQuizAttempts");

            migrationBuilder.DropIndex(
                name: "IX_UserQuizAttempts_SessionId",
                table: "UserQuizAttempts");

            migrationBuilder.DropColumn(
                name: "SessionId",
                table: "UserQuizAttempts");
        }
    }
}
