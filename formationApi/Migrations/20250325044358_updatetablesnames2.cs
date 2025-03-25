using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace formationApi.Migrations
{
    /// <inheritdoc />
    public partial class updatetablesnames2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attachments_modules_ModuleId",
                table: "Attachments");

            migrationBuilder.DropForeignKey(
                name: "FK_Feedbacks_AspNetUsers_UserId",
                table: "Feedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_modules_Formations_FormationId",
                table: "modules");

            migrationBuilder.DropForeignKey(
                name: "FK_sessions_Formations_FormationId",
                table: "sessions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_sessions",
                table: "sessions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_modules",
                table: "modules");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Feedbacks",
                table: "Feedbacks");

            migrationBuilder.RenameTable(
                name: "sessions",
                newName: "Sessions");

            migrationBuilder.RenameTable(
                name: "modules",
                newName: "Modules");

            migrationBuilder.RenameTable(
                name: "Feedbacks",
                newName: "feedbacks");

            migrationBuilder.RenameIndex(
                name: "IX_sessions_FormationId",
                table: "Sessions",
                newName: "IX_Sessions_FormationId");

            migrationBuilder.RenameIndex(
                name: "IX_modules_FormationId_Position",
                table: "Modules",
                newName: "IX_Modules_FormationId_Position");

            migrationBuilder.RenameIndex(
                name: "IX_Feedbacks_UserId",
                table: "feedbacks",
                newName: "IX_feedbacks_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sessions",
                table: "Sessions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Modules",
                table: "Modules",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_feedbacks",
                table: "feedbacks",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Attachments_Modules_ModuleId",
                table: "Attachments",
                column: "ModuleId",
                principalTable: "Modules",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_feedbacks_AspNetUsers_UserId",
                table: "feedbacks",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Modules_Formations_FormationId",
                table: "Modules",
                column: "FormationId",
                principalTable: "Formations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sessions_Formations_FormationId",
                table: "Sessions",
                column: "FormationId",
                principalTable: "Formations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attachments_Modules_ModuleId",
                table: "Attachments");

            migrationBuilder.DropForeignKey(
                name: "FK_feedbacks_AspNetUsers_UserId",
                table: "feedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Modules_Formations_FormationId",
                table: "Modules");

            migrationBuilder.DropForeignKey(
                name: "FK_Sessions_Formations_FormationId",
                table: "Sessions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sessions",
                table: "Sessions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Modules",
                table: "Modules");

            migrationBuilder.DropPrimaryKey(
                name: "PK_feedbacks",
                table: "feedbacks");

            migrationBuilder.RenameTable(
                name: "Sessions",
                newName: "sessions");

            migrationBuilder.RenameTable(
                name: "Modules",
                newName: "modules");

            migrationBuilder.RenameTable(
                name: "feedbacks",
                newName: "Feedbacks");

            migrationBuilder.RenameIndex(
                name: "IX_Sessions_FormationId",
                table: "sessions",
                newName: "IX_sessions_FormationId");

            migrationBuilder.RenameIndex(
                name: "IX_Modules_FormationId_Position",
                table: "modules",
                newName: "IX_modules_FormationId_Position");

            migrationBuilder.RenameIndex(
                name: "IX_feedbacks_UserId",
                table: "Feedbacks",
                newName: "IX_Feedbacks_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_sessions",
                table: "sessions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_modules",
                table: "modules",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Feedbacks",
                table: "Feedbacks",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Attachments_modules_ModuleId",
                table: "Attachments",
                column: "ModuleId",
                principalTable: "modules",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Feedbacks_AspNetUsers_UserId",
                table: "Feedbacks",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_modules_Formations_FormationId",
                table: "modules",
                column: "FormationId",
                principalTable: "Formations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_sessions_Formations_FormationId",
                table: "sessions",
                column: "FormationId",
                principalTable: "Formations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
