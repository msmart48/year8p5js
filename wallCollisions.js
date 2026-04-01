//--Instructions--
//in this example we will create a player that can move around the screen using the arrow keys, but cannot pass through walls
//we will use a simple collision detection function to check if the player is touching a wall and prevent them from moving through it
//you can customize the player, walls, and collision function as needed for your game
//-------------------------------------------


// --- PLAYER SETTINGS ---
let playerX = 100;   // starting X position
let playerY = 100;   // starting Y position
let playerSize = 30; // size of the player square
let speed = 2;       // how fast the player moves

// --- WALLS ---
//walls are stored in an array of objects with x, y, width, and height properties
//these are static walls that do not move, but we could easily add code to move them if we wanted to make the game harder
let walls = [
    { x: 200, y: 200, w: 100, h: 40 },
    { x: 50, y: 300, w: 200, h: 20 }
];

// --- SETUP ---
function setup() {
    createCanvas(400, 400); // game screen size
}

// --- MAIN GAME LOOP ---
function draw() {
    background(220); // light grey background

    // --- SAVE OLD POSITION of player before updating ---
    // We keep this in case we hit a wall and can move the player back to this position
    let oldX = playerX;
    let oldY = playerY;

    // --- MOVEMENT CONTROLS ---
    //left, right, up, down arrow keys move the player in that direction by "speed" pixels per frame
    if (keyIsDown(LEFT_ARROW)) {
        playerX -= speed; // move left
    }
    if (keyIsDown(RIGHT_ARROW)) {
        playerX += speed; // move right
    }
    if (keyIsDown(UP_ARROW)) {
        playerY -= speed; // move up
    }
    if (keyIsDown(DOWN_ARROW)) {
        playerY += speed; // move down
    }


    // --- CHECK COLLISIONS WITH WALLS ---
    // Loop through each wall and check if player is colliding with it
    for (let i = 0; i < walls.length; i++) {
        let wall = walls[i]; //get current wall from array and all its properties (x, y, w, h)

        // If player touches a wall...
        //pass in player position and size and wall position and size to the collision function
        if (isColliding(playerX, playerY, playerSize, wall.x, wall.y, wall.w, wall.h)) {
            // Move player back to where they were before if touching wall
            playerX = oldX;
            playerY = oldY;
        }
    }

    // --- DRAW PLAYER ---
    fill(0, 0, 255); // blue
    rect(playerX, playerY, playerSize, playerSize);

    // --- DRAW WALLS ---
    fill(150); // grey
    // Loop through walls array and draw each wall as a rectangle using its properties stored in the object (x, y, w, h)
    for (let i = 0; i < walls.length; i++) {
        rect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
    }

    // --- SHOW PLAYER POSITION ---
    //for testing purposes, we can show the player's current X and Y coordinates on the screen to verify that the collision is working correctly
    fill(0);
    text("X: " + playerX + " Y: " + playerY, 10, 20);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// --- COLLISION FUNCTION ---
// Checks if player is not touching a wall by checking if player is completely to the left, right, above, or below the wall.
//  If any of those are true, then there is no collision. 
// Otherwise, they must be touching and we return true for a collision.
//function is reusable for any player size and any wall size
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isColliding(px, py, pSize, wx, wy, w, h) {

    // If player is completely to the left of wall
    if (px + pSize < wx) return false;

    // If player is completely to the right of wall
    if (px > wx + w) return false;

    // If player is completely above wall
    if (py + pSize < wy) return false;

    // If player is completely below wall
    if (py > wy + h) return false;

    // Otherwise, they must be touching a wall, so we return true for a collision
    return true;
}