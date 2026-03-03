class CollisionHandler {
    static check(actor, ground) {
        actor.onGround = false;

        ground.platforms.forEach(p => {
            // Horizontal bounds check
            const horizontalMatch = (actor.x + actor.w * 0.8 > p.x) && (actor.x + actor.w * 0.2 < p.x + p.w);
            
            // Vertical collision check - adjusted to keep the actor higher up
            const verticalMatch = (actor.y + actor.h > p.y) && (actor.y + actor.h < p.y + p.h + 30);

            if (horizontalMatch && verticalMatch) {
                if (actor.dy >= 0) {
                    // This line places the character's feet exactly on the top of the platform
                    actor.y = p.y - actor.h; 
                    actor.dy = 0;
                    actor.onGround = true;
                }
            }
        });
    }
}
