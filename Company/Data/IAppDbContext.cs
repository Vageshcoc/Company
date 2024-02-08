using Company.Models;
using Microsoft.EntityFrameworkCore;

namespace Company.Data
{
	public interface IAppDbContext
	{
		public DbSet<users> users { get; set; }
		public DbSet<department> department { get; set; }

		//void SaveChanges();
		Task SaveChangesAsync();
	}
}
