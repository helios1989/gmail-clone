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
    public class PostService: IPostServiceInterface
    {
        private readonly IPostServiceRepository _postServiceRepository;
        private readonly IMapper _mapper;
        public PostService(IPostServiceRepository postServiceRepository, IMapper mapper)
        {
            _postServiceRepository = postServiceRepository;
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<IEnumerable<Posts>> GetAll()
        {
            var allPosts = await _postServiceRepository.GetAll();
            return allPosts;
        }
        public async Task<bool> DeletePost(int id)
        {
            var deletedPosts = await _postServiceRepository.DeletePost(id);
            return deletedPosts;
        }
        public async Task<Posts?> AddPost(Posts posts)
        {
            var isAddedPosts = await _postServiceRepository.AddPost(posts);
            if (isAddedPosts)
            {
                return posts;
            }
            else
            {
                return null;
            }
        }

        public async Task<Posts?> UpdatePost(Posts posts)
        {
            var isUpdatedMail = await _postServiceRepository.UpdatePost(posts);
            if (isUpdatedMail)
            {
                return posts;
            }
            else
            {
                return null;
            }
        }

    }
}
