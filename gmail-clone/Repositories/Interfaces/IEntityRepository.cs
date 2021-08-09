using System;
using gmail_clone.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace gmail_clone.Repositories.Interfaces
{
    public interface IEntityRepository<T> where T : Entity
    {
        Task<T> GetEntity(int id);
        Task<T> Get(int id);
        Task<IEnumerable<T>> GetAll(int parentId);
        Task<T> Add(T item);
        Task<bool> Update(T item);
        Task<bool> Remove(int id);
    }
}
