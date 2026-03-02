class CollisionHandler {
    static check(player, ground) {
        player.onGround = false;
        
        ground.platforms.forEach(p => {
            // Check if ninja is falling and is within the horizontal range of the platform
            if (player.dy >= 0 &&
                player.x + (player.w * 0.2) < p.x + p.w &&
                player.x + (player.w * 0.8) > p.x &&
                player.y + player.h > p.y &&
                player.y + player.h < p.y + 40) {
                
                // Stop the ninja on top of the platform
                player.y = p.y - player.h;
                player.dy = 0;
                player.onGround = true;
            }
        });
    }
}
