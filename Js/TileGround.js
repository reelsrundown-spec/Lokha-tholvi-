class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 350, w: 1200, h: 250 },
            { x: 1300, y: 250, w: 400, h: 40 },
            { x: 1800, y: 150, w: 400, h: 40 },
            { x: 2300, y: 350, w: 2500, h: 250 }
        ];
        this.coins = [];
        for(let i=0; i<10; i++) {
            this.coins.push({ x: 500 + (i * 400), y: 250, collected: false });
        }
        this.portal = { x: 4500, y: 230, w: 80, h: 120, active: false };
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
            this.ctx.strokeStyle = "cyan";
            this.ctx.lineWidth = 4;
            this.ctx.strokeRect(this.portal.x, this.portal.y, this.portal.w, this.portal.h);
        }
    }
}
