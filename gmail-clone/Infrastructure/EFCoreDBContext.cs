using System;
using Microsoft.EntityFrameworkCore;
using gmail_clone.Models;
namespace gmail_clone.Infrastructure
{
    public class EFCoreDBContext: DbContext
    {

        public EFCoreDBContext(DbContextOptions<EFCoreDBContext> options) : base(options)
        {
        }
        public  DbSet<Mail> Mail { get; set; } = null!;
        public DbSet<Posts> Post { get; set; } = null!;

    }
}
