using System;
using formationApi.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;


namespace formationApi.SignalR
{
    [Authorize]
    public class PresenceHub :Hub
	{
        private readonly PresenceTracker _tracker;

        public PresenceHub(PresenceTracker tracker)
        {
            _tracker = tracker;
        }

        public override async Task OnConnectedAsync()
        {
            if (Context.User == null)
            {
                throw new HubException("Cannot get current user claim");
            }

            int userId = Context.User.GetUserId(); 
            bool isOnline = await _tracker.UserConnected(userId, Context.ConnectionId);
            if (isOnline)
            {
                await Clients.Others.SendAsync("UserIsOnline", userId);
            }

            int[] currentUsers = await _tracker.GetOnlineUsers();
            await Clients.Caller.SendAsync("GetOnlineUsers", currentUsers);
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            if (Context.User == null)
            {
                throw new HubException("Cannot get current user claim");
            }

            int userId = Context.User.GetUserId(); // Assumes GetUserId() exists
            bool isOffline = await _tracker.UserDisconnected(userId, Context.ConnectionId);
            if (isOffline)
            {
                await Clients.Others.SendAsync("UserIsOffline", userId);
            }

            await base.OnDisconnectedAsync(exception);
        }
    }
}

