class CollisionHandler {
    static check(actor, ground) {
        actor.onGround = false;

        ground.platforms.forEach(p => {
            // Check if actor is within the horizontal bounds of the platform
            const horizontalMatch = (actor.x + actor.w * 0.8 > p.x) && (actor.x + actor.w * 0.2 < p.x + p.w);
            
            // Check if actor's feet are touching the top of the platform
            const verticalMatch = (actor.y + actor.h > p.y) && (actor.y + actor.h < p.y + p.h + 20);

            if (horizontalMatch && verticalMatch) {
                if (actor.dy >= 0) {
                    actor.y = p.y - actor.h; // Snap to top of platform
                    actor.dy = 0;
                    actor.onGround = true;
                }
            }
        });
    }
}
