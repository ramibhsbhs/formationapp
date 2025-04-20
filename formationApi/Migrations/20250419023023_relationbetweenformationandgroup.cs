using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace formationApi.Migrations
{
    /// <inheritdoc />
    public partial class relationbetweenformationandgroup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FormationGroup",
                columns: table => new
                {
                    FormationsId = table.Column<int>(type: "integer", nullable: false),
                    GroupsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormationGroup", x => new { x.FormationsId, x.GroupsId });
                    table.ForeignKey(
                        name: "FK_FormationGroup_Formations_FormationsId",
                        column: x => x.FormationsId,
                        principalTable: "Formations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FormationGroup_groups_GroupsId",
                        column: x => x.GroupsId,
                        principalTable: "groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FormationGroup_GroupsId",
                table: "FormationGroup",
                column: "GroupsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FormationGroup");
        }
    }
}
