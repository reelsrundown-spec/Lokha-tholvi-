class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 300, w: 600, h: 200 },    // Starting Floor
            { x: 700, y: 200, w: 250, h: 30 },   // First Jump
            { x: 1050, y: 120, w: 200, h: 30 },  // Second Jump
            { x: 1350, y: 280, w: 700, h: 200 }, // Large Landing Area
            { x: 2150, y: 180, w: 300, h: 40 }   // Final Platform
        ];
    }

    draw() {
        this.platforms.forEach(p => {
            // Draw soil (brown)
            this.ctx.fillStyle = "#5d4037";
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            // Draw grass (green)
            this.ctx.fillStyle = "#4caf50";
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });
    }
}
