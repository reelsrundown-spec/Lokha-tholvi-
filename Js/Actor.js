class Actor {
    constructor(ctx) {
        this.ctx = ctx;
        this.video = document.createElement('video');
        this.video.src = "Images/Herorunner.MP4";
        this.video.muted = true;
        this.video.loop = true;
        this.video.play();

        this.x = 100;
        this.y = 150;
        this.w = 100; // Adjusted for video size
        this.h = 100;
        this.dx = 0;
        this.dy = 0;
        this.dir = 1;
        this.onGround = false;
    }

    draw() {
        this.ctx.save();
        if (this.dir === -1) {
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(this.video, -this.x - this.w, this.y, this.w, this.h);
        } else {
            this.ctx.drawImage(this.video, this.x, this.y, this.w, this.h);
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
