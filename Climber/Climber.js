var player;

var gameStartTime;
var obstacles = [];
var newObstacleTime = 3000 / 5;

var keyLeftHeld = false;
var keyRightHeld = false;

var autoRestart = true;
var restartTimer;

var highScore = 0;
var currentScore = null;

var prevObstacleSpawned = null;

var gameState = 3;

var titleState = 0;
var selectedItem = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  if (gameState == 0) {
    Game();
  }
  if (gameState == 1) {
    Lose();
  }
  if (gameState == 2) {
    StartGame();
  }
  if (gameState == 3) {
    Title();
  }
}

function keyPressed() {
  
  if (keyCode == 27){
    titleState = 0;
    selectedItem = 0;
    gameState = 3;
    
  }
  
  if (keyCode === LEFT_ARROW && gameState == 0) {
    keyLeftHeld = true;
  }
  if (keyCode === RIGHT_ARROW && gameState == 0) {
    keyRightHeld = true;
  }

  if (gameState == 3) {
    if (keyCode === LEFT_ARROW) {
      keyLeftHeld = true;
    }
    if (keyCode === RIGHT_ARROW) {
      keyRightHeld = true;
    }
    if (titleState == 0) {
      if (keyCode === 13 || keyCode === 32) {
        titleState = 1;
      }
    } else {
      if (keyCode === LEFT_ARROW) {
        selectedItem = 0;
      }
      if (keyCode === RIGHT_ARROW) {
        selectedItem = 1;
      }

      if (keyCode === 13 || keyCode === 32) {
        gameState = 2;
      }
    }
  }

  if (keyCode === 82 && gameState == 1) {
    restartTimer = null;
    gameState = 2;
  }

  return false;
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    keyLeftHeld = false;
  }
  if (keyCode === RIGHT_ARROW) {
    keyRightHeld = false;
  }

  return false;
}

function StartGame() {

  obstacles = [];
  obstacles[0] = new Obstacle();
  prevObstacleSpawned = obstacles[0];

  if (selectedItem == 0) {
    player = new Player();
  } else {
    player = new AIPlayer();
  }

  player.setX(width/2-player.w/2);
  player.setY(height-player.h);

  gameStartTime = millis();
  currentScore = 0;

  gameState = 0;
}

function Game() {
  player.display();
  for (i=0; i<obstacles.length; i++) {
    obstacles[i].display();
    obstacles[i].drop();

    if (overObstacle(obstacles[i], player)) {
      gameState = 1;
    }
  }

  if (floor(millis() - gameStartTime) > newObstacleTime) {
    gameStartTime = millis();

    var foundObs = false;
    for (i=0; i<obstacles.length; i++) {
      if (!obstacles[i].active) {
        foundObs = true;
        obstacles[i] = new Obstacle(prevObstacleSpawned, player.stepSize, newObstacleTime);
        prevObstacleSpawned = obstacles[i];
      }
    }
    if (!foundObs) {
      obstacles.push(new Obstacle(prevObstacleSpawned, player.stepSize, newObstacleTime));
      prevObstacleSpawned = obstacles[obstacles.length-1];
    }

    currentScore+=1;
  }

  if (!player.isAI) {
    if (keyLeftHeld) {
      player.move(LEFT_ARROW);
    }
    if (keyRightHeld) {
      player.move(RIGHT_ARROW);
    }
  } else {
    player.move();
  }

  fill(255);
  textSize(20);
  stroke(0);
  textAlign(LEFT);
  text("Current Score: " + currentScore, width - textWidth("Current Score: " + currentScore) - 5, textSize()+10);
  text("High Score: " + highScore, width - textWidth("High Score: " + highScore) - 5, textSize()*2 +20);
}

function Lose() {

  if (currentScore > highScore) {
    highScore = currentScore;
  }

  currentScore = 0;

  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(50);
  textStyle(BOLD);
  text("YOU LOSE", width/2, height/2);
  if (restartTimer == null) {
    restartTimer = millis();
  }

  if (autoRestart) {
    textSize(15);
    textStyle(NORMAL);
    text("Auto Restart in " + floor((4000 - (millis() - restartTimer))/1000), width/2, height/2 + 100)
      if (millis() - restartTimer >= 3000) {
      restartTimer = null;
      gameState = 2;
    }
  }
}

function Title() {

  noStroke();
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(100);
  textStyle(BOLD);
  text("CLIMBER", width/2, height/3);

  fill(255);
  textSize(15);
  textStyle(NORMAL);
  text("Left/Right Arrow Keys to Move - Enter/Space to Select", width/2, height - 50)

    if (titleState == 0) {
    fill(255, 0, 0);
    textSize(30);
    textStyle(NORMAL);
    text("START GAME", width/2, height/2 + 50)
  } else {



    textSize(30);
    fill(255, 0, 0);
    console.log(textWidth("Manual"));

    var triangleStartW;
    if (selectedItem == 0) {
      triangleStartW = width/2 - 100 - textWidth("Manual")/2 - 13;
    } else {
      triangleStartW = width/2 + 100 - textWidth("AI Player")/2 - 13;
    }
    var triangleStartH = height/2 + 50 - textSize()/2;
    triangle(triangleStartW, triangleStartH, 
      triangleStartW + 10, triangleStartH + 5, 
      triangleStartW, triangleStartH + 10);

    textAlign(CENTER);
    fill(255, 0, 0);
    textSize(30);
    textStyle(NORMAL);
    text("Manual", width/2 - 100, height/2 + 50)

      textSize(30);
    textStyle(NORMAL);
    text("AI Player", width/2 + 100, height/2 + 50)
  }
}
