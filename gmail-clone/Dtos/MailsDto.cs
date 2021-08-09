using System;
using gmail_clone.Dtos;
using gmail_clone.Models;
using System.Collections.Generic;

namespace gmail_clone.Dtos
{
    public class MailsDto
    {
        public int Id { get; set; }
        public string? FromMessage { get; set; }
        public string? ToMessage { get; set; }
        public string? Message { get; set; }
    }
}
