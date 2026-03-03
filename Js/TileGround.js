class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 350, w: 1000, h: 250, type: "start" },
            { x: 1200, y: 250, w: 400, h: 40, type: "static" }
        ];
        this.coins = [];
        this.portal = { x: 7800, y: 230, w: 80, h: 120, active: false };
    }

    draw() {
        this.platforms.forEach(p => {
            this.ctx.fillStyle = "#5d4037";
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            this.ctx.fillStyle = "#4caf50";
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });
    }
}
