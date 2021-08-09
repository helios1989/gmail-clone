using System;
namespace gmail_clone.Models
{
    public class Mail
    {
        public int Id { get; set; }
        public string? FromMessage { get; set; }
        public string? ToMessage { get; set; }
        public string? Message { get; set; }
    }
}
