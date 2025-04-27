using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace formationApi.Migrations
{
    /// <inheritdoc />
    public partial class newmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuizId",
                table: "Modules",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FinalQuizId",
                table: "Formations",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FormationId",
                table: "feedbacks",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Modules_QuizId",
                table: "Modules",
                column: "QuizId");

            migrationBuilder.CreateIndex(
                name: "IX_Formations_FinalQuizId",
                table: "Formations",
                column: "FinalQuizId");

            migrationBuilder.CreateIndex(
                name: "IX_feedbacks_FormationId",
                table: "feedbacks",
                column: "FormationId");

            migrationBuilder.AddForeignKey(
                name: "FK_feedbacks_Formations_FormationId",
                table: "feedbacks",
                column: "FormationId",
                principalTable: "Formations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Formations_quizs_FinalQuizId",
                table: "Formations",
                column: "FinalQuizId",
                principalTable: "quizs",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Modules_quizs_QuizId",
                table: "Modules",
                column: "QuizId",
                principalTable: "quizs",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_feedbacks_Formations_FormationId",
                table: "feedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Formations_quizs_FinalQuizId",
                table: "Formations");

            migrationBuilder.DropForeignKey(
                name: "FK_Modules_quizs_QuizId",
                table: "Modules");

            migrationBuilder.DropIndex(
                name: "IX_Modules_QuizId",
                table: "Modules");

            migrationBuilder.DropIndex(
                name: "IX_Formations_FinalQuizId",
                table: "Formations");

            migrationBuilder.DropIndex(
                name: "IX_feedbacks_FormationId",
                table: "feedbacks");

            migrationBuilder.DropColumn(
                name: "QuizId",
                table: "Modules");

            migrationBuilder.DropColumn(
                name: "FinalQuizId",
                table: "Formations");

            migrationBuilder.DropColumn(
                name: "FormationId",
                table: "feedbacks");
        }
    }
}
