class CollisionHandler {
    static check(player, ground) {
        player.onGround = false;
        
        ground.platforms.forEach(p => {
            // Check if player is falling and within the horizontal bounds of the platform
            if (player.dy >= 0 &&
                player.x + player.w * 0.3 < p.x + p.w &&
                player.x + player.w * 0.7 > p.x &&
                player.y + player.h > p.y &&
                player.y + player.h < p.y + p.h + 20) {
                
                // Set player position exactly on top of the platform
                player.y = p.y - player.h;
                player.dy = 0;
                player.onGround = true;
            }
        });
    }
}
