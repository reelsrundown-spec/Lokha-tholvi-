class Actor {
    constructor(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "Images/1ae75336c051202a09eb2c841c588a20.gif";
        this.x = 50;
        this.y = 100;
        this.w = 60;
        this.h = 60;
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
        this.dy += 0.8;
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0) this.x = 0;
    }
}
