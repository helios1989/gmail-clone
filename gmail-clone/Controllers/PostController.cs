using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using gmail_clone.Dtos;
using gmail_clone.Models;
using gmail_clone.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace gmail_clone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly IPostServiceInterface _postServiceInterface;
        private readonly ILogger<MailController> _logger;
        public PostController(ILogger<MailController> logger, IPostServiceInterface postServiceInterface)
        {
            _logger = logger;
            _postServiceInterface = postServiceInterface;
        }


        [HttpGet("allPosts")]
        [ProducesResponseType(typeof(List<PostsDto>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> GetAllMail()
        {
            var result = await _postServiceInterface.GetAll();
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                Console.WriteLine("its not null");
            }

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> DeletePost(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = await _postServiceInterface.DeletePost(id);
            if (!response)
            {
                return BadRequest("Invalid ID");
            }

            return Ok(true);
        }
        [HttpPost]
        [ProducesResponseType(typeof(Posts), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> AddPost(Posts posts)
        {
            Console.WriteLine(posts);
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = await _postServiceInterface.AddPost(posts);
            if (response == null)
            {
                return BadRequest("Data was not added");
            }
            return Ok(posts);
        }

        [HttpPut]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> UpdatePost(Posts posts)
        {
            Console.WriteLine(posts.Id);
            if (!ModelState.IsValid)
            {
                return BadRequest(" this is not a good return");
            }

            var response = await _postServiceInterface.UpdatePost(posts);
            if (response == null)
            {
                return BadRequest("Data was not added");
            }
            return Ok(posts);
        }

    }

}
