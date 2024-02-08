using Company.Data;
using Company.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
ConfigurationManager configuration = builder.Configuration;
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddPolicy(name: "departmentOrigins",
	policy =>
	{
		policy.WithOrigins("http://localhost:7001").AllowAnyMethod().AllowAnyHeader();
	}));
builder.Services.AddScoped<IDbService, DbService>();
builder.Services.AddScoped<IdepartmentService, departmentService>();
builder.Services.AddScoped<IAppDbContext, AppDbContext>();
builder.Services.AddScoped<IusersService, usersService>();
builder.Services.AddDbContext<AppDbContext>(options =>
	   options.UseNpgsql(configuration.GetConnectionString("Companydb")));

//public void ConfigureServices(IServiceCollection services)
//{

//}

builder.Services.AddCors(options =>
{
	options.AddPolicy("MyCorsPolicy", builder =>
	{
		// Allow specific origins, methods, and headers
		builder
			.WithOrigins("https://example.com", "https://anotherdomain.com", "http://localhost:4200")
			.WithMethods("GET", "POST", "PUT", "DELETE")
			.WithHeaders("Content-Type", "Authorization");
	});
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();

}
app.UseCors("MyCorsPolicy");
app.UseCors("departmentOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

