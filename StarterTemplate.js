///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Instructions: use this template to start your game project. It includes a menu screen, main game loop, win screen, and game over screen.
// You can customize the text and design of each screen as needed for your game. 
// You can also add more screens or game modes if you want (ex: instructions screen, different levels, etc.). 
// The keyPressed function is set up to start the game using the spacebar and restart the game after winning or losing, but you can change the controls as needed for your game.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//list global variables here
let mode = "menu";






////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//setup function runs once at the start of the game
//you can change the size of the game screen by changing the numbers in createCanvas(width, height)
//you can also set up any other variables or objects you need for the game in this function
//timer variables, player variables, enemy variables, etc. can all be initialized here
//create enemies, powerups, or other game elements here as well if you want them to be present from the start of the game
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas(400, 400);

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//draw function runs 60 times per second and is the main game loop
//we will use a game mode variable to determine which screen to show and then load a function for each screen
//you can add more game modes and screens as needed for your game (ex: instructions screen, different levels, etc.)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function draw() {
    if (mode === "menu") {
        menu();
    } else if (mode === "game") {
        game();
    } else if (mode === "win") {
        youWin();
    } else if (mode === "gameover") {
        gameOver();
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//main game loop screen
//this is where we will put all the code for the actual game after the menu screen
//includes player movement, game mechanics, win/lose conditions, etc.
//draws the game screen and all the game elements
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function game() {
    background(220); // light grey background
    textSize(16);
    fill(0);
    text("This is the main game screen.", 10, 200);
    text("Add your game code here!", 10, 220); //you can delete this line once you start adding your game code






















}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Menu, win, and game over screens
//these functions will be called in the main draw loop to show the different screens of the game
//you can customize the text and design of these screens as needed for your game
//you can add animated backgrounds, images, or other design elements to make these screens more visually appealing
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//menu screen
function menu() {
    background(220);
    textSize(32);
    fill(0);
    text("My Game Name...", 120, 150);
    textSize(16);
    text("Press SPACE to Start", 140, 200);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//win screen when the player wins the game
function youWin() {
    background(220);
    textSize(32);
    fill(0);
    text("You Win!", 120, 150);
    textSize(16);
    text("Press SPACE to Start", 140, 200);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//game over screen when the player loses the game
function gameOver() {
    background(220);
    textSize(32);
    fill(0);
    text("Game Over", 120, 150);
    textSize(16);
    text("Press SPACE to Continue", 140, 200);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//keyPressed function to handle key presses for starting the game using spacebar and restarting the game after winning or losing
// key 32 = space
//key 13 = enter
// you can add other key controls for the game in the main game loop function
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function keyPressed() {
    //if space key presseed, start the game if we are on the menu screen, or go back to menu if we are on the win or game over screen
    if (keyCode === 32) {
        if (mode === "menu") {
            mode = "game";
        }
        else if (mode === "win") {
            mode = "menu";
        }
        else if (mode === "gameover") {
            mode = "menu";
        }
    }
}