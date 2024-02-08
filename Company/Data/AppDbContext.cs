using Company.Models;
using Microsoft.EntityFrameworkCore;

namespace Company.Data
{
	public class AppDbContext : DbContext, IAppDbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}
		public DbSet<users> users { get; set; }

		public DbSet<department> department { get; set; }

		public Task SaveChangesAsync()
		{
			throw new NotImplementedException();
		}

		//void IAppDbContext.SaveChanges()
		//{
		//	throw new NotImplementedException();
		//}
	}
}
