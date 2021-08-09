using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gmail_clone.Models;

namespace gmail_clone.Repositories.Interfaces
{
    public interface IPostServiceRepository
    {
        Task<IEnumerable<Posts>> GetAll();
        Task<bool> DeletePost(int id);
        Task<bool> AddPost(Posts post);
        Task<bool> UpdatePost(Posts post);
    }
}
