using sumitdemo.Model;

namespace sumitdemo.Interface
{
    public interface IStudent
    {
        Task<List<Student>> getalldata();
    }
}
