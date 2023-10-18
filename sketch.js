let PlayerOneY = 300 // Defines the start position for Playor One on the Y axis
let PlayerOneX = 100 // Defines the start position for Playor One on the X axis
let PlayerTwoY = 300 // Defines the start position for Playor Two on the Y axis
let PlayerTwoX = 350 // Defines the start position for Playor Two on the X axis
let BallY = 300 // Defines the start position for the ball on the Y axis
let BallX = 250 // Defines the start position for the ball on the X axis
let ScoreOne = 0 // Set the start score for Player One
let ScoreTwo = 0 // Set the start score for Player Two
let Start = 0 // Defines that the game isent started
let background // Makes the background picture global
let ball // Makes the ball picture global
let PlayerHit // Makes the ball hitting player sound global
let SideHit // Makes the ball hitting the border sound global
let TopHit // Makes the ball hitting the top sound global

function preload(){
  background = createImg('/resources/background.png',''); // Defines the picture for the background
	background.hide(); // Hides the background picture
  ball = createImg('/resources/ball.png',''); // Defines the picture for the ball
  ball.hide(); // Hides the ball picture
  PlayerHit = createAudio('/resources/HitPlayer.mp3',''); // Defines the audio for Player Hit
  PlayerHit.hide(); // Hides the player hit sound
  SideHit = createAudio('/resources/HitSide.mp3',''); // Defines the audio for Side Hit
  SideHit.hide(); // Hides the side hit sound
  TopHit = createAudio('/resources/HitTop.mp3','') // Defines the audio for Top Hit
  TopHit.hide(); // Hides the top hit sound
}

function setup() {
  createCanvas(1536,864); // Defines the game area
  image(background,0,0); // Loads the background
  PlayerOneY = 0.5*864-25; // Defines the start position on the Y axis for Player One
  PlayerOneX = 300; // Defines the start position on the X axis for Player One
  PlayerTwoY = 0.5*864-25; // Defines the start position on the Y axis for Player Two
  PlayerTwoX = 1536-300; // Defines the start position on the X axis for Player Two
  BallY = 0.5*864; // Defines the start position for the Y axis for the ball
  BallX = 0.5*1536-10; // Defines the start position for the X axis for the ball
  ScoreOne = 0; // Sets the start score for Player One
  ScoreTwo = 0; // Sets the start score for Player Two
  xSpeed = 0; // Defines the initial speed on the X axis for the ball
  ySpeed = 0; // Defines the initial speed on the Y axis for the ball
  Start = 0; // Defines that the game is not started
}

function draw() { 
  image(background,0,0); // Loads the background everytime in order for other objects in the canvas not to be shown more than once
  fill(255); // Defines the color for objects
  
  if (ScoreOne>=100) {
    xSpeed = 0
    ySpeed = 0
    BallX = 0.5*1536-10; // Resets the ball to the middle position on the X axis
    BallY = 0.5*864; // Resets the ball to the middle position on the Y 
    Start = 0
  } else if (ScoreTwo>=100) {
    xSpeed = 0
    ySpeed = 0
    BallX = 0.5*1536-10; // Resets the ball to the middle position on the X axis
    BallY = 0.5*864; // Resets the ball to the middle position on the Y axis
    Start = 0
  }

  if (Start==1) { // Checks if the game has been started
    image(ball,BallX,BallY); // Creates the ball and define its position.
    BallX += xSpeed; // Makes the ball move on the X axis
    BallY += ySpeed; // Makes the ball move on the Y axis
  
    if (BallY>=PlayerTwoY-0 && BallY<=PlayerTwoY+50) { // Checks if the ball has hit Player Twos positon on the Y axis
      if (BallX>=PlayerTwoX-5 && BallX<=PlayerTwoX+10) { // Checks if the ball has hit Player Twos positon on the x axis
        xSpeed = -xSpeed; // Reverses the speed of the ball for it to move in the opposit direction
        ySpeed = random(-7,7) // Randomly chooses a speed on the Y axis for the ball
        ScoreTwo = ScoreTwo+1 // Give Player Two a point
        PlayerHit.play(); // Plays player hit sound
      }
    }
    if (BallY>=PlayerOneY-0 && BallY<=PlayerOneY+50) { // Checks if the ball has hit Player Ones positon on the Y axis
      if (BallX>=PlayerOneX-10 && BallX<=PlayerOneX+5) { // Checks if the ball has hit Player Ones positon on the x axis
        xSpeed = -xSpeed; // Reverses the speed of the ball for it to move in the opposit direction
        ySpeed = random(-7,7) // Randomly chooses a speed on the Y axis for the ball
        ScoreOne = ScoreOne+1 // Give Player One a point
        PlayerHit.play(); // Plays player hit sound
      }
    }
  } else { // If the game hasent been started
    textSize(32); // Defines the size of the text
    text('PRESS SHIFT TO START', 0.5*1536-187,825); // Displays the text if the game hasent been started
  }

  rect(PlayerOneX,PlayerOneY,10,50,50); // Create Player One
  rect(PlayerTwoX,PlayerTwoY,10,50,50) // Create Player Two

  if (BallY<=0 || BallY>=864) { // Checks if the Ball touches the top or bottom
    ySpeed = -ySpeed // Reverses the balls speed on the Y axis
    TopHit.play(); // Plays top hit sound
  }

  if(BallX>1536) { // Checks if the ball has hit the right side of the canvas
    xSpeed = 0 // Sets the ball speed on the X axis to 0
    ySpeed = 0 // Sets the ball speed on the Y axis to 0
    BallX = 0.5*1536-10; // Resets the ball to the middle position on the X axis
    BallY = 0.5*864; // Resets the ball to the middle position on the Y axis
    ScoreOne = ScoreOne+10 // Gives Player One ten points
    SideHit.play(); // Plays side hit sound
    xSpeed = random(1,9) // Chooses a random speed between 1 and 9
  }

  if(BallX<0) { // Checks if the ball has hit the left side of the canvas
    xSpeed = 0 // Sets the ball speed on the X axis to 0
    ySpeed = 0 // Sets the ball speed on the Y axis to 0
    BallX = 0.5*1536-10; // Resets the ball to the middle position on the X axis
    BallY = 0.5*864; // Resets the ball to the middle position on the Y axis
    ScoreTwo = ScoreTwo+10 // Gives Player Two ten points
    SideHit.play(); // Plays side hit sound
    xSpeed = random(-1,-9) // Chooses a random speed between 1 and 9
  }

  textSize(32); // Defines the size of the text
  text('SCORE', 0.5*1536-57,50); // Writes 'Score' in the top of the screen
  text(ScoreOne, PlayerOneX, 50); // Writes the score for Player One at the top of the screen
  text(ScoreTwo, PlayerTwoX, 50); // Writes the score for Player Two at the top of the screen
}

function keyPressed() {
  if (Start == 0) { // Check if the game has been started
    if (keyCode===SHIFT) { // Check if Shift is pressed
      ScoreOne = 0
      ScoreTwo = 0
      xSpeed = random(-4,4) // Randomly chooses a speed for the ball on the X axis
      Start = 1 // Tells the game that it is started
    } 
  } else if (keyCode === UP_ARROW) { // Check if Arrow Up is pressed
    if (PlayerOneY>0) { // Check if Player One is at the top of the canvas
      PlayerOneY -= 45 // Moves Player One up by 45
    }
  } else if (keyCode === DOWN_ARROW) { // Check if Arrow Down is pressed
    if (PlayerOneY+25<864) { // Check if Player One is at the bottom of the canvas
      PlayerOneY += 45 // Moves Player One down by 45
    }
  } else if (keyCode === LEFT_ARROW) { // Check if Arrow Left is pressed
    if (PlayerTwoY>0) { // Check if Player Two is at the top of the canvas
      PlayerTwoY -= 45 // Moves Player Two up by 45
    }
  } else if (keyCode === RIGHT_ARROW) { // Check if Arrow Right is pressed
    if (PlayerTwoY+25<864) { // Check if Player Two is at the bottom of the canvas
      PlayerTwoY += 45 // Moves Player Two down by 45
    }
  }
}