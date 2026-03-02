class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        // Adjusted platforms for landscape view
        this.platforms = [
            { x: 0, y: 300, w: 400, h: 100 },    // Starting Floor
            { x: 450, y: 220, w: 250, h: 30 },   // Middle Floating Platform
            { x: 750, y: 280, w: 500, h: 150 }   // End Platform
        ];
    }

    draw() {
        this.platforms.forEach(p => {
            // Draw brown dirt
            this.ctx.fillStyle = "#5d4037";
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            // Draw green grass top
            this.ctx.fillStyle = "#4caf50";
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });
    }
}
