const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const ground = new TileGround(ctx);
const ninja = new Actor(ctx);

function mainLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ground.draw();
    ninja.draw();
    ninja.update();
    
    CollisionHandler.check(ninja, ground);
    
    requestAnimationFrame(mainLoop);
}

// Mobile Control Buttons
document.getElementById("lBtn").ontouchstart = () => { ninja.dx = -8; ninja.dir = -1; };
document.getElementById("rBtn").ontouchstart = () => { ninja.dx = 8; ninja.dir = 1; };
document.getElementById("lBtn").ontouchend = document.getElementById("rBtn").ontouchend = () => ninja.dx = 0;
document.getElementById("jBtn").ontouchstart = () => { if(ninja.onGround) ninja.dy = -19; };

mainLoop();
