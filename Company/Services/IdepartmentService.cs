using Company.Models;

namespace Company.Services
{
	public interface IdepartmentService
	{
		Task<bool> Createdepartment(department dept);
		Task<List<department>> GetdepartmentList();
		Task Updatedepartment(department dept);
		Task<bool> Deletedepartment(int key);
		Task<department> Getdepartment(int id);
	}
}
