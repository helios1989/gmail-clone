using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gmail_clone.Infrastructure;
using gmail_clone.Models;
using gmail_clone.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace gmail_clone.Repositories
{
    public class MailRepository : IMailServiceRepository
    {
        private readonly EFCoreDBContext _ctx;
        private readonly ILogger _logger;
        public MailRepository(IServiceScopeFactory factory, ILogger<MailRepository> logger)
        {
            _ctx = factory.CreateScope().ServiceProvider.GetRequiredService<EFCoreDBContext>();
            _logger = logger;
        }
        public async Task<IEnumerable<Mail>> GetAll()
        {
            var listMails = await _ctx.Mail.ToListAsync();
            return listMails;
        }
        public async Task<bool> DeleteMail(int id)
        {
            var deletedMail = await _ctx.Mail.FirstOrDefaultAsync(x => x.Id == id);
            if (deletedMail == null)
            {
                _logger.LogWarning($"Cannot delete Mail with Id = {id}. Mail ID  was not found");
            } else
            {
                _ctx.Mail.Remove(deletedMail);
                await _ctx.SaveChangesAsync();

                return true;
            }
            return false;
        }

        public async Task<bool> AddMail(Mail mail)
        {
            if (mail.FromMessage == null || mail.FromMessage == "")
            {
                _logger.LogWarning("Cannot add empty message from");
                return false;
               
            } else
            {
                await _ctx.Mail.AddAsync(mail);

                var i = await _ctx.SaveChangesAsync();
                if (i == 0)
                {
                    _logger?.LogWarning($"Mail message from = {mail.FromMessage}");
                }
                return true;
            }
        }

        public async Task<bool> UpdateMail(Mail mail)
        {

            _ctx.Mail.Update(mail);
            var i =  await _ctx.SaveChangesAsync();
            if (i == 0)
            {
                _logger?.LogWarning("Not Updated");
            }
            return true;
        }

    }
}
