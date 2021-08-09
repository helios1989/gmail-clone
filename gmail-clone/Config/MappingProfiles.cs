using AutoMapper;
using System;
using gmail_clone.Dtos;
using gmail_clone.Models;

namespace gmail_clone.Config
{
    public class MappingProfiles: Profile
    {
        public MappingProfiles()
        {
            CreateMap<Mail, MailsDto>();
        }
    }
}
