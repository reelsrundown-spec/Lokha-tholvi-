class TileGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.startTime = Date.now();
        this.platforms = [
            { x: 0, y: 350, w: 1200, h: 250, breakable: true }, // ഇടിഞ്ഞു വീഴുന്ന തറ
            { x: 1300, y: 250, w: 400, h: 40 },
            { x: 1800, y: 150, w: 400, h: 40 },
            { x: 2300, y: 350, w: 5000, h: 250 } // നീളമുള്ള അടുത്ത ഭാഗം
        ];
        this.coins = [];
        // 50 coins total to get 500 points
        for(let i=0; i<60; i++) {
            this.coins.push({ x: 400 + (i * 150), y: 280, collected: false });
        }
        this.portal = { x: 7000, y: 230, w: 80, h: 120, active: false };
    }

    draw() {
        let elapsed = (Date.now() - this.startTime) / 1000;

        this.platforms.forEach(p => {
            // 5 സെക്കൻഡ് കഴിഞ്ഞാൽ ആദ്യത്തെ പ്ലാറ്റ്‌ഫോം വരയ്ക്കില്ല
            if (p.breakable && elapsed > 5) return;

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

        if (this.portal.active) {
            this.ctx.fillStyle = "purple";
            this.ctx.fillRect(this.portal.x, this.portal.y, this.portal.w, this.portal.h);
        }
    }
}
