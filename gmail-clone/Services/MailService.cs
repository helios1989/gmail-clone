using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using gmail_clone.Dtos;
using gmail_clone.Models;
using gmail_clone.Repositories.Interfaces;
using gmail_clone.Services.Interfaces;

namespace gmail_clone.Services
{
    public class MailService : IMailServiceInterface
    {
        private readonly IMailServiceRepository _mailServiceRepository;
        private readonly IMapper _mapper;
        public MailService(IMailServiceRepository mailServiceRepository, IMapper mapper)
        {
            _mailServiceRepository = mailServiceRepository;
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<IEnumerable<Mail>> GetAll()
        {
            var mails = await _mailServiceRepository.GetAll();
            return mails;
        }

        public async Task<bool> DeleteMail(int id)
        {
            var deletedMail = await _mailServiceRepository.DeleteMail(id);
            return deletedMail;
        }
        public async Task<Mail?> AddMail(Mail mail)
        {
            var isAddedMail = await _mailServiceRepository.AddMail(mail);
            if (isAddedMail)
            {
                return mail;
            } else
            {
                return null;
            }
        }

        public async Task<Mail?> UpdateMail(Mail mail)
        {
            var isUpdatedMail = await _mailServiceRepository.UpdateMail(mail);
            if (isUpdatedMail)
            {
                return mail;
            } else
            {
                return null;
            }
        }

        public Task<Mail> GetCourse(int id)
        {
            throw new NotImplementedException();
        }
    }
    
}
