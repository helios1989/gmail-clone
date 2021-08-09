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
    public class MailController: ControllerBase
    {
        private readonly IMailServiceInterface _mailService;
        private readonly ILogger<MailController> _logger;
        public MailController(ILogger<MailController> logger, IMailServiceInterface mailService)
        {
            _logger = logger;
            _mailService = mailService;
        }

        [Authorize]
        [HttpGet("allMails")]
        [ProducesResponseType(typeof(List<MailsDto>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> GetAllMail()
        {
            var result = await _mailService.GetAll();
            Console.WriteLine(result);
            if (result == null)
            {
                return NotFound();
            } else
            {
                Console.WriteLine("its not null");
            }

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> DeleteMail(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = await _mailService.DeleteMail(id);
            if (!response)
            {
                return BadRequest("Invalid ID");
            }

            return Ok(true);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Mail), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> AddMail(Mail mail)
        {
            Console.WriteLine(mail);
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = await _mailService.AddMail(mail);
            if (response == null)
            {
                return BadRequest("Data was not added");
            }
            return Ok(mail);
        }

        [HttpPut]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> UpdateMail(Mail mail)
        {
            Console.WriteLine(mail.Id);
            if (!ModelState.IsValid)
            {
                return BadRequest(" this is not a good return");
            }
         
            var response = await _mailService.UpdateMail(mail);
            if (response == null)
            {
                return BadRequest("Data was not added");
            }
            return Ok(mail);
        }

    }

}
