using Company.Data;
using Company.Models;
using Microsoft.AspNetCore.Mvc;

namespace Company.Services
{
	public class usersService : IusersService
	{
		private readonly IDbService _dbService;
		private readonly AppDbContext _appDbContext;
		public usersService(IDbService dbService,AppDbContext appDbContext)
		{
			_dbService = dbService;
			_appDbContext = appDbContext;
		}
		public  async Task<bool> Createusers(users user)


		{
			var list= _appDbContext.users.OrderBy(x=>x.id).ToList();
			//	user.id=
			//var result = _appDbContext.users.ToList();
			if(list.Count>0)
				{
				user.id = list[list.Count - 1].id + 1;
			}
			else
			{
				user.id = 1;

			}
		
			var result =

		new users
		{
			id = user.id,
			username = user.username,
			useremail = user.useremail,
			gender = user.gender,
			departmentid = user.departmentid,
		};
			//try
			//{
			    _appDbContext.users.Add(result);
				_appDbContext.SaveChanges();
			return true;
			//}
			//catch (Exception ex)
			//{
			//	return Ok(result);
			//}
			//return Ok(result);

			//var result =
			//	await _dbService.EditData(
			//		"INSERT INTO public.users (id,username,useremail,gender,departmentid) VALUES (@Id, @Username,@Useremail,@Gender,@Departmentid)",
			//		user);

		}

		public class users1
		{
			public int? id { get; set; }
			public string? username { get; set; }
			public string? useremail { get; set; }
			public string? gender { get; set; }
			public string? departmentid { get; set; }

		}
		public async Task<List<users1>> GetusersList()
		{

			//var usersList = await _dbService.GetAll<users>("SELECT * FROM public.users", new { });.

			var result = from use in _appDbContext.users
						 join dep in _appDbContext.department on use.departmentid equals dep.id
						 select new users1
						 {
							 id = use.id,
							 username = use.username,
							 useremail = use.useremail,
							 gender = use.gender,
							 departmentid = dep.departmentname
						 };
			//var result = _appDbContext.users.ToList();
			return result.ToList();
		}
		public async Task<users> Getusers(int id)
		{
			//var usersList = await _dbService.GetAsync<users>("SELECT * FROM public.users where id=@id", new { id });
			var result = from obj in _appDbContext.users
						 where obj.id == id
						 select obj;

			return (users)result.FirstOrDefault();
		}

		public async Task<users1> Getusers1(int id)
		{
			//var usersList = await _dbService.GetAsync<users>("SELECT * FROM public.users where id=@id", new { id });
			var result = from use in _appDbContext.users
						 join dep in _appDbContext.department on use.departmentid equals dep.id
						 where use.id==id
						 select new users1
						 {
							 id = use.id,
							 username = use.username,
							 useremail = use.useremail,
							 gender = use.gender,
							 departmentid = dep.departmentname
						 };
			//var result = _appDbContext.users.ToList();
			return result.FirstOrDefault();
		}

		public async Task Updateusers(users user)
		{
			//var updateusers =
			//	await _dbService.EditData(
			//		"Update public.users SET username = @Username, useremail = @Useremail, gender = @Gender, departmentid = @Departmentid WHERE id = @Id",
			//		user);
			var result = await _appDbContext.users.FindAsync(user.id);
			if (user != null)
			{
				result.username = user.username;
				result.useremail = user.useremail;
				result.gender = user.gender;
				result.departmentid = user.departmentid;
				_appDbContext.SaveChanges();
			}
			//return result;
			return ;
		}
		public async Task<bool> Deleteusers(int id)
		{
			//var deleteusers = await _dbService.EditData("DELETE FROM public.users WHERE id=@Id", new { id });
			var userToDelete = _appDbContext.users.Find(id);
			if (userToDelete == null)
			{
				return false;
			}
			_appDbContext.users.Remove(userToDelete);
			_appDbContext.SaveChanges();
			//return Ok();

			return true;
		}

		public Task<users> Updatedepartment(users user)
		{
			throw new NotImplementedException();
		}

		
	}
}
