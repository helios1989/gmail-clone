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
    public class PostRepository: IPostServiceRepository

    {
        private readonly EFCoreDBContext _ctx;
        private readonly ILogger _logger;
        public PostRepository(IServiceScopeFactory factory, ILogger<PostRepository> logger)
        {
            _ctx = factory.CreateScope().ServiceProvider.GetRequiredService<EFCoreDBContext>();
            _logger = logger;
        }
        public async Task<IEnumerable<Posts>> GetAll()
        {
            var allPosts = await _ctx.Post.ToListAsync();
            return allPosts;
        }
        public async Task<bool> DeletePost(int id)
        {
            var deletedPosts = await _ctx.Post.FirstOrDefaultAsync(x => x.Id == id);
            if (deletedPosts == null)
            {
                _logger.LogWarning($"Cannot delete Post with Id = {id}. Mail ID  was not found");
            }
            else
            {
                _ctx.Post.Remove(deletedPosts);
                await _ctx.SaveChangesAsync();

                return true;
            }
            return false;
        }

        public async Task<bool> AddPost(Posts posts)
        {
            if (posts.userid == null || posts.title == "")
            {
                _logger.LogWarning("Cannot add empty message from");
                return false;

            }
            else
            {
                await _ctx.Post.AddAsync(posts);

                var i = await _ctx.SaveChangesAsync();
                if (i == 0)
                {
                    _logger?.LogWarning($"Mail message from = {posts.title}");
                }
                return true;
            }
        }

        public async Task<bool> UpdatePost(Posts posts)
        {

            _ctx.Post.Update(posts);
            var i = await _ctx.SaveChangesAsync();
            if (i == 0)
            {
                _logger?.LogWarning("Not Updated");
            }
            return true;
        }

    }
}
