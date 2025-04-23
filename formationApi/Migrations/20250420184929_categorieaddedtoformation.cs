using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace formationApi.Migrations
{
    /// <inheritdoc />
    public partial class categorieaddedtoformation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Formations",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Formations");
        }
    }
}
