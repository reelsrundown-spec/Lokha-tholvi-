class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 250, w: 500, h: 100 },
            { x: 600, y: 180, w: 200, h: 30 },
            { x: 900, y: 250, w: 600, h: 200 }
        ];
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
