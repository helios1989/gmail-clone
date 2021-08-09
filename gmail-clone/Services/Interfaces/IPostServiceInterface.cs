using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gmail_clone.Models;
namespace gmail_clone.Services.Interfaces
{
    public interface IPostServiceInterface
    {
        Task<IEnumerable<Posts>> GetAll();
        Task<bool> DeletePost(int id);
        Task<Posts> AddPost(Posts posts);
        Task<Posts> UpdatePost(Posts posts);
    }
}
