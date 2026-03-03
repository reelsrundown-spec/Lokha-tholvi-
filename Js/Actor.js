class Actor {
    constructor(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "Images/player_run.gif"; 
        this.x = 100;
        this.y = 50; // High enough to fall onto the platform
        this.w = 90;
        this.h = 110;
        this.dx = 0;
        this.dy = 0;
        this.onGround = false;
        this.loaded = false;
        this.img.onload = () => { this.loaded = true; };
    }

    draw() {
        if (this.loaded) {
            this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        } else {
            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    update() {
        this.dy += 0.8; 
        this.y += this.dy;
        this.x += this.dx;
        if (this.x < 0) this.x = 0;
    }
}
