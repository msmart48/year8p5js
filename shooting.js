//--Instructions--
//in this example we will create a player that can move around the screen using the arrow keys
//when spacebar is pressed, the player will shoot a laser that travels up the screen from the player's position
//you can customize the player, lasers, and shooting mechanics as needed for your game
//-------------------------------------------


// --- PLAYER SETTINGS ---
let playerX = 100;   // starting X position
let playerY = 100;   // starting Y position
let playerSize = 30; // size of the player square
let speed = 2;       // how fast the player moves

// --- lasers ---
//lasers are stored in an array of objects with x, y, size, and type properties
//these lasers will travel up the screen from the player's position and the player can shoot them by pressing the spacebar
let lasers = [];

// --- SETUP ---
function setup() {
    createCanvas(400, 400); // game screen size
}

// --- MAIN GAME LOOP ---
function draw() {
    background(220); // light grey background


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


    // --- DRAW THE LASERS ---
    //loop through the lasers array and draw each laser as a small rectangle, then move it up the screen by decreasing its y position by its speed
    for (let i = 0; i < lasers.length; i++) {
        let laser = lasers[i]; //get current laser from array and all its properties (x, y, size, speed)
        fill(255, 0, 0); // red for lasers
        rect(laser.x, laser.y, laser.size, laser.size * 2); //draw laser as a rectangle
        laser.y -= laser.speed; // move the laser up the screen by decreasing its y position by its speed
        if (laser.y < 0) {
            lasers.splice(i, 1); // Remove the laser from the array if it goes off the top of the screen
            i--; // Adjust the index after removal so we don't skip the next laser in the array
        }
    }

    // --- DRAW PLAYER ---
    fill(0, 0, 255); // blue
    rect(playerX, playerY, playerSize, playerSize); //draw player as a rectangle


}
// --- SHOOTING LASERS ---
//triggered by keyPressed function which runs once every time a key is pressed
//if you have menu and game modes set up like in the StarterTemplate.js, you can add a condition to only allow shooting when in the game mode
function keyPressed() {
    //space key shoots a laser from the player's position
    if (key === ' ') { // spacebar key code is 32
        console.log("Shoot laser!"); //you can delete this line once you add the code to shoot the laser
        // Create a new laser object at the player's position and add it to the lasers array
        let laser = {
            x: playerX + playerSize / 2, // start at center of player
            y: playerY, // start at top of player
            size: 5, // size of the laser
            speed: 5 // how fast the laser moves up the screen
        };
        lasers.push(laser); //add the new laser to the lasers array so it will be drawn and updated in the main game loop
    }
}

