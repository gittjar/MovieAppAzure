using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Models;

public class ElokuvaDBContext : DbContext
{
    public ElokuvaDBContext(DbContextOptions<ElokuvaDBContext> options)
        : base(options)
    {
    }

    public DbSet<MvcMovie.Models.Movie> Movie { get; set; } = default!;
}

