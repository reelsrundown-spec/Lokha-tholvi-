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
const actor = new Actor(ctx);
let cameraX = 0;
let isGameOver = false;
let score = 0;

function mainLoop() {
    if (isGameOver) return;

    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    cameraX = actor.x - 150;
    if(cameraX < 0) cameraX = 0;

    ctx.save();
    ctx.translate(-cameraX, 0);
    
    ground.draw();
    actor.draw();
    actor.update();
    
    CollisionHandler.check(actor, ground);

    ground.coins.forEach(c => {
        if (!c.collected && 
            actor.x < c.x + 30 && actor.x + actor.w > c.x - 30 &&
            actor.y < c.y + 30 && actor.y + actor.h > c.y - 30) {
            c.collected = true;
            score += 10;
            document.getElementById("scoreVal").innerText = score;
        }
    });

    if (score >= 30) ground.portal.active = true;

    if (ground.portal.active &&
        actor.x < ground.portal.x + ground.portal.w &&
        actor.x + actor.w > ground.portal.x &&
        actor.y < ground.portal.y + ground.portal.h &&
        actor.y + actor.h > ground.portal.y) {
        alert("Level 1 Clear! Jumping to Level 2...");
        location.reload();
    }
    
    ctx.restore();

    if (actor.y > canvas.height + 100) {
        isGameOver = true;
        document.getElementById("gameOver").style.display = "block";
    }
    
    requestAnimationFrame(mainLoop);
}

document.getElementById("lBtn").ontouchstart = () => { actor.dx = -8; actor.dir = -1; };
document.getElementById("rBtn").ontouchstart = () => { actor.dx = 8; actor.dir = 1; };
document.getElementById("lBtn").ontouchend = () => actor.dx = 0;
document.getElementById("rBtn").ontouchend = () => actor.dx = 0;
document.getElementById("jBtn").ontouchstart = () => { if(actor.onGround) actor.dy = -18; };

mainLoop();
