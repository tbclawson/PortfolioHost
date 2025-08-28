
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;


var builder = WebApplication.CreateBuilder(args);

var myAllowSpecificOrigins = "_myAllowSpecificOrigins"; // Add this

// 1. Add services to the container.

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173") // Your React app's URL
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});


var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<DataContext>(options => 
    options.UseSqlServer(connectionString));

builder.Services.AddControllers();


var app = builder.Build();

app.UseCors(myAllowSpecificOrigins);

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
