class CollisionHandler {
    static check(actor, ground) {
        actor.onGround = false;

        ground.platforms.forEach(p => {
            const horizontalMatch = (actor.x + actor.w * 0.8 > p.x) && (actor.x + actor.w * 0.2 < p.x + p.w);
            
            // Detection range
            const verticalMatch = (actor.y + actor.h > p.y) && (actor.y + actor.h < p.y + p.h + 30);

            if (horizontalMatch && verticalMatch) {
                if (actor.dy >= 0) {
                    // FIXED: Subtracting an extra 15px to lift him out of the dirt
                    actor.y = p.y - actor.h - 15; 
                    actor.dy = 0;
                    actor.onGround = true;
                }
            }
        });
    }
}
