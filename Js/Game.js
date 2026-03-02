const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    if (window.innerHeight > window.innerWidth) {
        canvas.width = window.innerHeight;
        canvas.height = window.innerWidth;
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);
resizeCanvas();

const ground = new TileGround(ctx);
const ninja = new Actor(ctx);

function mainLoop() {
    // Fill background with blue color first
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the platforms and character
    ground.draw();
    ninja.draw();
    ninja.update();
    
    CollisionHandler.check(ninja, ground);
    
    requestAnimationFrame(mainLoop);
}

document.getElementById("lBtn").ontouchstart = () => { ninja.dx = -8; ninja.dir = -1; };
document.getElementById("rBtn").ontouchstart = () => { ninja.dx = 8; ninja.dir = 1; };
document.getElementById("lBtn").ontouchend = () => ninja.dx = 0;
document.getElementById("rBtn").ontouchend = () => ninja.dx = 0;
document.getElementById("jBtn").ontouchstart = () => { if(ninja.onGround) ninja.dy = -19; };

mainLoop();
