const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let isGameOver = false;
let cameraX = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const ground = new TileGround(ctx);
const actor = new Actor(ctx);

function mainLoop() {
    if (isGameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    cameraX = actor.x - 150;
    if (cameraX < 0) cameraX = 0;

    ctx.save();
    ctx.translate(-cameraX, 0);
    
    ground.draw();
    actor.draw();
    actor.update();
    
    CollisionHandler.check(actor, ground);

    // Coin collection
    ground.coins.forEach(c => {
        if (!c.collected && actor.x < c.x + 20 && actor.x + actor.w > c.x - 20 && actor.y < c.y + 40 && actor.y + actor.h > c.y - 40) {
            c.collected = true;
            score += 10;
            document.getElementById("scoreVal").innerText = score;
        }
    });

    if (score >= 500) ground.portal.active = true;

    // Win Logic
    if (ground.portal.active && actor.x > ground.portal.x) {
        isGameOver = true;
        document.getElementById("gameWin").style.display = "block";
    }

    ctx.restore();

    // Out Logic
    if (actor.y > canvas.height) {
        isGameOver = true;
        document.getElementById("gameOver").style.display = "block";
    }

    requestAnimationFrame(mainLoop);
}

// Controls
document.getElementById("lBtn").ontouchstart = (e) => { e.preventDefault(); actor.dx = -7; actor.dir = -1; };
document.getElementById("rBtn").ontouchstart = (e) => { e.preventDefault(); actor.dx = 7; actor.dir = 1; };
document.getElementById("lBtn").ontouchend = () => actor.dx = 0;
document.getElementById("rBtn").ontouchend = () => actor.dx = 0;
document.getElementById("jBtn").ontouchstart = (e) => { e.preventDefault(); if(actor.onGround) actor.dy = -15; };

mainLoop();
