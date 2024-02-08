using Company.Data;
using Company.Models;
using Company.Services;
using Microsoft.AspNetCore.Mvc;

namespace Company.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class departmentController : Controller
	{
		private readonly IdepartmentService _departmentService;
		private readonly AppDbContext _appDbContext;

		public departmentController(IdepartmentService departmentService, AppDbContext appDbContext)
		{
			_departmentService = departmentService;
			_appDbContext = appDbContext;
		}

		[HttpGet]
		public async Task<IActionResult> Get()
		{
		 var result= await _departmentService.GetdepartmentList();
			//var result = _appDbContext.department.ToList();

			return Ok(result);
		}

		[HttpGet("{id:int}")]
		public async Task<IActionResult> Getdepartment(int id)
		{
			var result = await _departmentService.Getdepartment(id);
			//var result = from obj in _appDbContext.department
			//			 where obj.id == id
			//			 select obj;
			return Ok(result);
		}

		[HttpPost]
		public async Task<IActionResult> Adddepartment([FromBody] department dept)
		{
			 await _departmentService.Createdepartment(dept);
			//var result =
			
			//new department
			//{
			//	id = dept.id,
			//	departmentname = dept.departmentname
			//};
			//try
			//{
			//	_appDbContext.department.Add(result);
			//	_appDbContext.SaveChanges();
			//}
			//catch (Exception ex)
			//{
			//	return Ok(result);
			//}
			return Ok();
			
		}

		[HttpPut]
		public async Task<IActionResult> Updatedepartment([FromBody] department dept)
		{
			 await _departmentService.Updatedepartment(dept);

			return Ok();
			//var result = await _appDbContext.department.FindAsync(dept.id);
			//if (dept != null)
			//{
			//	result.id = dept.id;
			//	result.departmentname = dept.departmentname;
			//	_appDbContext.SaveChanges();
			//}
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Deletedepartment(int id)
		{
			var result = await _departmentService.Deletedepartment(id);
			//var departmentToDelete = _appDbContext.department.Find(id);
			//if (departmentToDelete == null)
			//{
			//	return NotFound();
			//}
			//_appDbContext.department.Remove(departmentToDelete);
			//_appDbContext.SaveChanges();
			return Ok();
		}
	}
}
