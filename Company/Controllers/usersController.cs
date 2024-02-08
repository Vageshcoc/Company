using Company.Data;
using Company.Models;
using Company.Services;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Company.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class usersController : Controller
	{
		private readonly IusersService _usersService;
		private readonly AppDbContext _appDbContext;
			
		public usersController(IusersService usersService, AppDbContext appDbContext)
		{
			_usersService = usersService;
			_appDbContext = appDbContext;
		}

		[HttpGet]
		public async Task<IActionResult> Get()
		{
			//var result = _appDbContext.users.ToList();
			var result = await _usersService.GetusersList();

			return Ok(result);
		}

		[HttpGet("{id:int}")]
		public async Task<IActionResult> Getusers(int id)
		{
			//var result = from obj in _appDbContext.users
			//			 where obj.id == id
			//			 select obj;
			var result = await _usersService.Getusers(id);

			return Ok(result);
		}

		//[HttpGet("{id:int}")]
		[HttpGet("Getusersview/{id:int}")]
		public async Task<IActionResult> Getusersview(int id)
		{
			//var result = from obj in _appDbContext.users
			//			 where obj.id == id
			//			 select obj;
			var result = await _usersService.Getusers1(id);

			return Ok(result);
		}


		[HttpPost]

		public async Task<IActionResult> AddUsers([FromBody] users user)
		{
			await _usersService.Createusers(user);

			//var result = _appDbContext.users.Add(user);
			//var result =

			//new users
			//{
			//	id = user.id,
			//	username = user.username,
			//	useremail = user.useremail,
			//	gender = user.gender,
			//	departmentid = user.departmentid,
			//};
			//try
			//{
			//	_appDbContext.users.Add(result);
			//	_appDbContext.SaveChanges();
			//}
			//catch(Exception ex) {
			//	return Ok(result);
			//}
			//return Ok(result) ;
			//return Ok(result);

			return Ok();
		}

		[HttpPut]
		public async Task<IActionResult> Updateusers([FromBody] users user)
		{
			await _usersService.Updateusers(user);

			return Ok();

			//var result = await _appDbContext.users.FindAsync(user.id);
			//if(user != null)
			//{
			//	result.username = user.username;
			//	result.useremail = user.useremail;
			//	result.gender = user.gender;
			//	result.departmentid = user.departmentid;
			//	 _appDbContext.SaveChanges();
			//}
			//return Ok(result);
		}
		


		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Deleteusers(int id)
		{
			var result = await _usersService.Deleteusers(id);



			return Ok(result);
			//var userToDelete = _appDbContext.users.Find(id);
			//if (userToDelete == null)
			//{
			//	return NotFound();
			//}
			//_appDbContext.users.Remove(userToDelete);
			//_appDbContext.SaveChanges();
			//return Ok();





		}



	}
}


