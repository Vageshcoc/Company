using Company.Data;
using Company.Models;

namespace Company.Services
{
	public class departmentService : IdepartmentService
	{
		private readonly IDbService _dbService;
		private readonly AppDbContext _appDbContext;

		public departmentService(IDbService dbService,AppDbContext appDbContext)
		{
			_dbService = dbService;
			_appDbContext = appDbContext;
		}
		public async Task<bool> Createdepartment(department dept)
		{
			//var result =
			//	await _dbService.EditData(
			//		"INSERT INTO public.department (id,departmentname) VALUES (@Id, @DepartmentName)",
			//		dept);

			

			var list = _appDbContext.department.OrderBy(x => x.id).ToList();
			//	user.id=
			//var result = _appDbContext.users.ToList();
			if (list.Count > 0)
			{
				dept.id = list[list.Count - 1].id + 1;
			}
			else
			{
				dept.id = 1;

			}

			var result =

			new department
			{
				id = dept.id,
				departmentname = dept.departmentname
			};
			//try
			//{
				_appDbContext.department.Add(result);
				_appDbContext.SaveChanges();
			//}
			//catch (Exception ex)
			//{
			//	return Ok(result);
			//}
			//return Ok(result);
			return true;
		}
		public async Task<List<department>> GetdepartmentList()
		{
			//var departmentList = await _dbService.GetAll<department>("SELECT * FROM public.department", new { });
			var result = _appDbContext.department.ToList();
			return result;
		}
		public async Task<department> Getdepartment(int id)
		{
			//var departmentList = await _dbService.GetAsync<department>("SELECT * FROM public.department where id=@id", new { id });
			var result = from obj in _appDbContext.department
						 where obj.id == id
						 select obj;
			return (department)result.FirstOrDefault();
		}
		public async Task Updatedepartment(department dept)
		{
			//var updatedepartment =
			//	await _dbService.EditData(
			//		"Update public.department SET departmentname=@DepartmentName WHERE id=@Id",
			//		dept);
			var result = await _appDbContext.department.FindAsync(dept.id);
			if (dept != null)
			{

				result.departmentname = dept.departmentname;
				_appDbContext.SaveChanges();
			}
			return ;
			
		}
		public async Task<bool> Deletedepartment(int id)
		{
			//var deletedepartment = await _dbService.EditData("DELETE FROM public.department WHERE id=@Id", new { id });
			var departmentToDelete = _appDbContext.department.Find(id);
			if (departmentToDelete == null)
			{
				return false;
			}
			_appDbContext.department.Remove(departmentToDelete);
			_appDbContext.SaveChanges();
			return true;
		}

		//Task<department> IdepartmentService.Updatedepartment(department dept)
		//{
		//	throw new NotImplementedException();
		//}
	}
}
