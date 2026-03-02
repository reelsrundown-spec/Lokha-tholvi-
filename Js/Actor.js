class Actor {
    constructor(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        // Exact filename you uploaded to GitHub
        this.img.src = "Images/GreenCharacter.png"; 
        this.x = 100; // Starting position on ground
        this.y = 150;
        this.w = 70;  // Adjusted width
        this.h = 90;  // Adjusted height to match image aspect ratio
        this.dx = 0;
        this.dy = 0;
        this.dir = 1;
        this.onGround = false;
    }

    draw() {
        this.ctx.save();
        if (this.dir === -1) {
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(this.img, -this.x - this.w, this.y, this.w, this.h);
        } else {
            this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        }
        this.ctx.restore();
    }

    update() {
        this.dy += 0.8; // Gravity physics
        this.x += this.dx;
        this.y += this.dy;

        // Prevent going off-screen
        if (this.x < 0) this.x = 0;
    }
}
