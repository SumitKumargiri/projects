using Microsoft.EntityFrameworkCore;
using sumitdemo.Model;

namespace sumitdemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) : base(options)
        {

        }
        public DbSet <Student> Students { get; set; }
    }
}
