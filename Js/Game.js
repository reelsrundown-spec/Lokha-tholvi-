const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (window.innerHeight > window.innerWidth) {
        canvas.width = window.innerHeight;
        canvas.height = window.innerWidth;
    }
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);
resizeCanvas();

const ground = new TileGround(ctx);
const ninja = new Actor(ctx);
let cameraX = 0; // To follow the ninja

function mainLoop() {
    // Sky background color
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Camera logic to follow ninja
    cameraX = ninja.x - 100;
    if(cameraX < 0) cameraX = 0;

    ctx.save();
    ctx.translate(-cameraX, 0); // Move the world
    
    ground.draw();
    ninja.draw();
    ninja.update();
    
    CollisionHandler.check(ninja, ground);
    
    ctx.restore();
    
    requestAnimationFrame(mainLoop);
}

// Touch Controls
document.getElementById("lBtn").ontouchstart = () => { ninja.dx = -8; ninja.dir = -1; };
document.getElementById("rBtn").ontouchstart = () => { ninja.dx = 8; ninja.dir = 1; };
document.getElementById("lBtn").ontouchend = () => ninja.dx = 0;
document.getElementById("rBtn").ontouchend = () => ninja.dx = 0;
document.getElementById("jBtn").ontouchstart = () => { if(ninja.onGround) ninja.dy = -18; };

mainLoop();
