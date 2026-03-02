class CollisionHandler {
    static check(player, ground) {
        player.onGround = false;
        ground.platforms.forEach(p => {
            // Logic to detect if ninja is touching a platform
            if (player.x < p.x + p.w && player.x + player.w > p.x &&
                player.y + player.h > p.y && player.y + player.h < p.y + 25) {
                player.y = p.y - player.h;
                player.dy = 0;
                player.onGround = true;
            }
        });
    }
}

