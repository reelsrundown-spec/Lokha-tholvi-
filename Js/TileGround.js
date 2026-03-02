class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        // Basic platforms for the level
        this.platforms = [
            { x: 0, y: 500, w: 600, h: 200 },    // Starting Floor
            { x: 700, y: 350, w: 300, h: 40 },   // Middle Floating Platform
            { x: 1100, y: 450, w: 500, h: 300 }  // End Platform
        ];
    }

    draw() {
        this.platforms.forEach(p => {
            this.ctx.fillStyle = "#5d4037"; // Soil color
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            this.ctx.fillStyle = "#4caf50"; // Grass color top
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });
    }
}
