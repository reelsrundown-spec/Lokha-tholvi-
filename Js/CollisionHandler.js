class CollisionHandler {
    static check(actor, ground) {
        actor.onGround = false;

        ground.platforms.forEach(p => {
            if (actor.x + actor.w * 0.8 > p.x && 
                actor.x + actor.w * 0.2 < p.x + p.w && 
                actor.y + actor.h > p.y && 
                actor.y + actor.h < p.y + p.h + 10) {
                
                if (actor.dy >= 0) {
                    actor.y = p.y - actor.h;
                    actor.dy = 0;
                    actor.onGround = true;
                }
            }
        });
    }
}
