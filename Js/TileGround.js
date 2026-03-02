class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        // Extended level 1 floor
        this.platforms = [
            { x: 0, y: 300, w: 600, h: 200 },
            { x: 700, y: 220, w: 300, h: 30 },
            { x: 1100, y: 150, w: 300, h: 30 },
            { x: 1500, y: 300, w: 1000, h: 200 } // Long end floor
        ];
        // 30 coins total (10 points each)
        this.coins = [];
        for(let i=0; i<6; i++) {
            this.coins.push({ x: 200 + (i*300), y: 250, collected: false });
        }
        // Portal at the end of level 1
        this.portal = { x: 2300, y: 200, w: 60, h: 100, active: false };
    }

    draw() {
        this.platforms.forEach(p => {
            this.ctx.fillStyle = "#5d4037";
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            this.ctx.fillStyle = "#4caf50";
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });

        this.ctx.fillStyle = "gold";
        this.coins.forEach(c => {
            if (!c.collected) {
                this.ctx.beginPath();
                this.ctx.arc(c.x, c.y, 10, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });

        // Draw Portal if score is 30 or more
        if (this.portal.active) {
            this.ctx.fillStyle = "purple";
            this.ctx.fillRect(this.portal.x, this.portal.y, this.portal.w, this.portal.h);
            this.ctx.strokeStyle = "white";
            this.ctx.strokeRect(this.portal.x, this.portal.y, this.portal.w, this.portal.h);
        }
    }
}
