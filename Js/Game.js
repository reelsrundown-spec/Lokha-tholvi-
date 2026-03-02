// Js/Game.js (Updated Win/Out Logic)
function mainLoop() {
    if (isGameOver) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    cameraX = actor.x - 150;
    ctx.save();
    ctx.translate(-cameraX, 0);
    ground.draw();
    actor.draw();
    actor.update();
    CollisionHandler.check(actor, ground);

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
