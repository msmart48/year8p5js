//--Instructions--
//in this example we will create a player that can move around the screen using the arrow keys
//items will be generated as objects and will fall down the screen from the top
//the player can collect the items by touching them, and we will use a simple collision detection function to check if the player is touching an item and remove it from the screen
//you can customize the player, items, and collision function as needed for your game
//-------------------------------------------


// --- PLAYER SETTINGS ---
let playerX = 100;   // starting X position
let playerY = 100;   // starting Y position
let playerSize = 30; // size of the player square
let speed = 2;       // how fast the player moves

// --- ITEMS ---
//items are stored in an array of objects with x, y, size, and type properties
//these items will fall down the screen from the top and the player can collect them by touching them
//you could also make a custom function to generate new items at random intervals instead of having a set number of items in the array from the start
let items = [
    { x: 50, y: 0, size: 20, type: "coin", speed: 5 },
    { x: 150, y: -100, size: 20, type: "gem", speed: 4 },
    { x: 250, y: -200, size: 20, type: "heart", speed: 3 }
];

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


    // --- CHECK COLLISIONS WITH ITEMS ---
    // Loop through each item and check if player is colliding with it
    for (let i = 0; i < items.length; i++) {
        let item = items[i]; //get current item from array and all its properties (x, y, size, type)
        //use distance formula to check if player is touching item (distance between player center and item center is less than sum of their radii)
        let dist = dist(playerX + playerSize / 2, playerY + playerSize / 2, item.x + item.size / 2, item.y + item.size / 2);
        if (dist < (playerSize / 2 + item.size / 2)) {
            //remove the item from the screen if player is touching it
            items.splice(i, 1); // Remove the item from the array
            i--; // Adjust the index after removal so we don't skip the next item in the array
            //------------------------------------------------------------------------------
            //or you could reset the item to the top of the screen with a new random x position instead of removing it completely
            //item.y = -item.size; // start just above the top of the screen
            //item.x = random(0, width - item.size); // random x position within the screen width
        }
    }

    // -- draw the items and make them fall down the screen by looping through items array---
    for (let i = 0; i < items.length; i++) {
        let item = items[i]; //get current item from array and all its properties (x, y, size, type)
        fill(255, 0, 0); // red for items
        ellipse(item.x, item.y, item.size); //draw item as a circle
        item.y += item.speed; // make the item fall down by increasing its y position
        if (item.y > height) {
            //reset item to top of screen with new random x position when gets to bottom of screen
            item.y = -item.size; // start just above the top of the screen
            item.x = random(0, width - item.size); // random x position within the screen width
        }
    }


    // --- DRAW PLAYER ---
    fill(0, 0, 255); // blue
    rect(playerX, playerY, playerSize, playerSize);




}

