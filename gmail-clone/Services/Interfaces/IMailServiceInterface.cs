using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gmail_clone.Models;
namespace gmail_clone.Services.Interfaces
{
    public interface IMailServiceInterface
    {
        Task<Mail?> GetCourse(int id);
        Task<IEnumerable<Mail>> GetAll();
        Task<bool> DeleteMail(int id);
        Task<Mail> AddMail(Mail mail);
        Task<Mail> UpdateMail(Mail mail);
       
    }
}
