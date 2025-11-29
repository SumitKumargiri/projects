using Microsoft.EntityFrameworkCore;
using sumitdemo.Data;
using sumitdemo.Interface;
using sumitdemo.Model;

namespace sumitdemo.Service
{
    public class Studentservice : IStudent
    {
        private readonly ApplicationDbContext _context;

        public Studentservice(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Student>> getalldata()
        {
            return await _context.Students.ToListAsync();
        }
    }
}
