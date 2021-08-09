using System;
using gmail_clone.Dtos;
using gmail_clone.Models;
using System.Collections.Generic;

namespace gmail_clone.Dtos
{
    public class PostsDto
    {
        public int Id { get; set; }
        public string? userid { get; set; }
        public string? title { get; set; }
        public string? body { get; set; }
    }
}
