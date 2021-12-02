using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SkillsApi
{
    public class SkillHub : Hub
    {
        public Task NotifyChange(Skill[] skills)
        {
            return Clients.All.SendAsync("skillsChanged", skills);
        }
    }
}