class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 300, w: 600, h: 200 },
            { x: 700, y: 220, w: 300, h: 30 },
            { x: 1100, y: 150, w: 300, h: 30 },
            { x: 1500, y: 300, w: 1200, h: 200 }
        ];
        this.coins = [];
        for(let i=0; i<6; i++) {
            this.coins.push({ x: 300 + (i * 400), y: 200, collected: false });
        }
        this.portal = { x: 2500, y: 200, w: 60, h: 100, active: false };
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

        if (this.portal.active) {
            this.ctx.fillStyle = "purple";
            this.ctx.fillRect(this.portal.x, this.portal.y, this.portal.w, this.portal.h);
        }
    }
}
