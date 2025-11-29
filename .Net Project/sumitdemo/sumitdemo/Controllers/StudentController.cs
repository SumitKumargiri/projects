using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sumitdemo.Interface;

namespace sumitdemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudent _student;
        public StudentController(IStudent student)
        {
            _student = student;
        }

        [HttpGet("get")]
        public async Task<IActionResult> Getdata()
        {
            var response = await _student.getalldata();
            return Ok(response);
        }
    }
}
