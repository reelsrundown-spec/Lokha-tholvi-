class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 350, w: 1000, h: 200 },
            { x: 1100, y: 250, w: 400, h: 40 },
            { x: 1600, y: 150, w: 400, h: 40 },
            { x: 2100, y: 350, w: 2000, h: 200 }
        ];
        this.coins = [];
        for(let i=0; i<8; i++) {
            this.coins.push({ x: 500 + (i * 400), y: 250, collected: false });
        }
        this.portal = { x: 3800, y: 230, w: 80, h: 120, active: false };
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
                this.ctx.arc(c.x, c.y, 12, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });

        if (this.portal.active) {
            this.ctx.fillStyle = "purple";
            this.ctx.fillRect(this.portal.x, this.portal.y, this.portal.w, this.portal.h);
        }
    }
}
