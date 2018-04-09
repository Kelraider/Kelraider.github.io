function Player(){
  this.pos = createVector(0,0);
  
  this.w = 50;
  this.h = 50;
  this.stepSize = width/50;
  
}

Player.prototype.setX = function(x){
  this.pos.x = x;
}
Player.prototype.setY = function(y){
  this.pos.y = y;
}


Player.prototype.moveTo = function(x,y){
  
}

Player.prototype.moveRelative = function(xAmount){
  
  if(this.pos.x + this.w + xAmount > width){
    this.pos.x = width-this.w-2;
  }else if(this.pos.x + xAmount <= 0){
    this.pos.x = 2;
  }else{
    this.pos.x += xAmount;
  }
  
}

Player.prototype.move = function(keycode){
  
  if(keyCode == null){
    console.warn("moveDir given null keycode");
  }else{
    if(keycode === LEFT_ARROW){
      //console.log("Left");
      this.moveRelative(-this.stepSize);
    }
    if(keycode === RIGHT_ARROW){
      //console.log("Right");
      this.moveRelative(this.stepSize);
    }

  }
}

Player.prototype.display = function(){
  
  stroke(150,0,0);
  fill(255,0,0);
 
  rect(this.pos.x, this.pos.y, this.w, this.h);
  
}

function AIPlayer(){
  Player.call(this);
  
  this.targetX = this.calcTarget();
  
}

AIPlayer.prototype = Object.create(Player.prototype);
AIPlayer.prototype.constructor = Player;
AIPlayer.prototype.isAI = true;

AIPlayer.prototype.calcTarget = function(){
  var closestObstacle = obstacles[0];
  for(i=1;i<obstacles.length;i++){
    if(obstacles[i].active && obstacles[i].currentY > closestObstacle.currentY){
      closestObstacle = obstacles[i];
    }
  }
  if(closestObstacle != null){
    return closestObstacle.holeX + closestObstacle.holeW/2 - this.w/2;
    
  }else{
    console.warn("Failed to find an Obstacle");
    return false;
  }
  
}

AIPlayer.prototype.move = function(){
  
  if(this.pos.x >= this.targetX - this.stepSize && this.pos.x <= this.targetX + this.stepSize){
    this.targetX = this.calcTarget();
  } else {
    if(this.targetX < this.pos.x){
      this.moveRelative(-this.stepSize);
    }else{
      this.moveRelative(this.stepSize);
    }
  }
  
}


    
