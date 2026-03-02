class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        // Creating a full level layout with multiple platforms
        this.platforms = [
            { x: 0, y: 300, w: 500, h: 150 },    // Starting Floor
            { x: 600, y: 220, w: 200, h: 30 },   // First Jump
            { x: 900, y: 150, w: 200, h: 30 },   // Higher Jump
            { x: 1200, y: 300, w: 600, h: 150 }, // Second Main Floor
            { x: 1900, y: 200, w: 300, h: 40 }   // Final Platform
        ];
    }

    draw() {
        this.platforms.forEach(p => {
            // Draw Brown soil
            this.ctx.fillStyle = "#5d4037";
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            
            // Draw Green grass on top
            this.ctx.fillStyle = "#4caf50";
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });
    }
}
