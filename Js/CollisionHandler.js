class CollisionHandler {
    static check(player, ground) {
        player.onGround = false;
        ground.platforms.forEach(p => {
            if (player.x < p.x + p.w &&
                player.x + player.w > p.x &&
                player.y + player.h > p.y &&
                player.y + player.h < p.y + 30) {
                
                player.y = p.y - player.h;
                player.dy = 0;
                player.onGround = true;
            }
        });
    }
}
