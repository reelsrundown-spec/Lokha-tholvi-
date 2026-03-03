class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.startTime = Date.now();
        this.platforms = [
            { x: 0, y: 350, w: 1000, h: 250, type: "start" },
            { x: 1200, y: 250, w: 400, h: 40, type: "static" },
            { x: 1800, y: 350, w: 8000, h: 250, type: "static" }
        ];
        this.coins = [];
        for(let i = 0; i < 50; i++) {
            this.coins.push({ x: 500 + (i * 150), y: 280, collected: false });
        }
        this.portal = { x: 7800, y: 230, w: 80, h: 120, active: false };
    }

    draw() {
        let elapsed = (Date.now() - this.startTime) / 1000;
        this.platforms.forEach(p => {
            if (p.type === "start" && elapsed > 5) return; 
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
    }
}
