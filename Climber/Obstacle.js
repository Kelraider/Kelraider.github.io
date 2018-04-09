function Obstacle(prevObstacle, playerStepSize, newObstacleTime) {

  this.currentY = 0;

  this.w = width;
  this.h = height/50;
  
  this.holeW = random(100, 200);
  if(prevObstacle != null){
    newObstacleTime = newObstacleTime - (50/5);
    var minX = 0;
    var maxX = this.w-this.holeW;
    if(prevObstacle.holeX - (newObstacleTime * playerStepSize)/10 > 0){
      console.log("Valid Min");
      minX = prevObstacle.holeX - (newObstacleTime * playerStepSize)/10 //- (playerStepSize * newObstacleTime);
    }
    if(prevObstacle.holeX + (newObstacleTime * playerStepSize)/10 < this.w-this.holeW){
      console.log("Valid Max");
      maxX = prevObstacle.holeX + (newObstacleTime * playerStepSize)/10 //+ (playerStepSize * newObstacleTime);
    }
    console.log(prevObstacle.holeX,minX,maxX);
    this.holeX = random(minX, maxX);

  }else{
    console.log("Test");
    this.holeX = random(0, this.w-this.holeW);
  }
  

  this.dropSpeed = 5;
  
  this.active = true;
}

Obstacle.prototype.display = function() {
  noStroke();
  fill(255, 0, 0);
  rect(0, this.currentY, this.holeX, this.h);
  rect(this.holeX+this.holeW, this.currentY, this.w-this.holeX+this.holeW, this.h);
}

Obstacle.prototype.drop = function() {
  if(this.active){
    if(this.currentY + this.dropSpeed <= height){
      this.currentY += this.dropSpeed;
    } else {
      this.currentY = -100;
      this.active = false;
    }
  }
}

function overObstacle(obstacle, player) {
  if(obstacle.active){
    if(player.pos.y <= obstacle.currentY && player.pos.y + player.h >= obstacle.currentY){
      if(player.pos.x <= obstacle.holeX || player.pos.x + player.w >= obstacle.holeX + obstacle.holeW){
        return true;
      }
    }
  }
  return false;
}
