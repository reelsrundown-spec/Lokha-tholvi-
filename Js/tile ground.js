class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        // Platform layout inspired by the mountain adventure image
        this.platforms = [
            { x: 0, y: 500, w: 400, h: 200 },    // Starting Ground
            { x: 500, y: 350, w: 250, h: 40 },   // Floating middle platform
            { x: 850, y: 250, w: 400, h: 500 }   // Goal platform
        ];
    }
    draw() {
        this.platforms.forEach(p => {
            this.ctx.fillStyle = "#5d4037"; // Brown dirt
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            this.ctx.fillStyle = "#4caf50"; // Green grass top
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });
    }
}
