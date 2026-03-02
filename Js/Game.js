const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Function to handle landscape rotation and canvas sizing
function resizeCanvas() {
    if (window.innerHeight > window.innerWidth) {
        // Portrait mode: swap width and height for rotation
        canvas.width = window.innerHeight;
        canvas.height = window.innerWidth;
    } else {
        // Landscape mode: use standard dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

// Event listeners for screen changes
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);
resizeCanvas();

// Initialize Game Objects
const ground = new TileGround(ctx);
const ninja = new Actor(ctx);

function mainLoop() {
    // Clear the screen every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the world
    ground.draw();
    
    // Update and Draw Ninja
    ninja.draw();
    ninja.update();
    
    // Handle Physics/Collisions
    CollisionHandler.check(ninja, ground);
    
    requestAnimationFrame(mainLoop);
}

// Mobile Touch Controls linking to buttons in index.html
document.getElementById("lBtn").ontouchstart = () => { 
    ninja.dx = -8; 
    ninja.dir = -1; 
};
document.getElementById("rBtn").ontouchstart = () => { 
    ninja.dx = 8; 
    ninja.dir = 1; 
};

document.getElementById("lBtn").ontouchend = () => ninja.dx = 0;
document.getElementById("rBtn").ontouchend = () => ninja.dx = 0;

document.getElementById("jBtn").ontouchstart = () => { 
    if(ninja.onGround) {
        ninja.dy = -19; // Jump Force
    }
};

// Start the Game
mainLoop();

