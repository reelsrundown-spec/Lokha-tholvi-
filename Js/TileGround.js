class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.platforms = [
            { x: 0, y: 300, w: 500, h: 150 },
            { x: 600, y: 220, w: 200, h: 30 },
            { x: 900, y: 150, w: 200, h: 30 },
            { x: 1200, y: 300, w: 600, h: 150 }
        ];
        // Positions for the coins
        this.coins = [
            { x: 200, y: 250, collected: false },
            { x: 650, y: 170, collected: false },
            { x: 950, y: 100, collected: false },
            { x: 1400, y: 250, collected: false }
        ];
    }

    draw() {
        this.platforms.forEach(p => {
            this.ctx.fillStyle = "#5d4037";
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            this.ctx.fillStyle = "#4caf50";
            this.ctx.fillRect(p.x, p.y, p.w, 15);
        });

        // Drawing yellow coins
        this.ctx.fillStyle = "gold";
        this.coins.forEach(c => {
            if (!c.collected) {
                this.ctx.beginPath();
                this.ctx.arc(c.x, c.y, 10, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }
}
