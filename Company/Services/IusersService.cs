using Company.Models;
using static Company.Services.usersService;

namespace Company.Services
{
	public interface IusersService
	{
		Task<bool> Createusers(users user);
		Task<List<users1>> GetusersList();
		Task<users> Updatedepartment(users user);
		Task<bool> Deleteusers(int key);
		Task Updateusers(users user);
		Task<users> Getusers(int id);
		Task<users1> Getusers1(int id);


	}
}
