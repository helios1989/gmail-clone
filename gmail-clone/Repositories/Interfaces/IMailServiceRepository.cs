using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gmail_clone.Models;

namespace gmail_clone.Repositories.Interfaces
{
    public interface IMailServiceRepository
    {
        Task<IEnumerable<Mail>> GetAll();
        Task<bool> DeleteMail(int id);
        Task<bool> AddMail(Mail mail);
        Task<bool> UpdateMail(Mail mail);
    }
}
