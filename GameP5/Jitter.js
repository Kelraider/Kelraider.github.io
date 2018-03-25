// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(25, 50);
  this.speed = 0;
  this.pastX = new Array(30);
  this.pastY = new Array(30);
  this.colour = color(random(0,255),random(0,255),random(0,255));
  this.strokecolour = color(50,0,0);
  this.colourDecay = 10;
  this.targetX = width/2;
  this.targetY = height/2;

  this.move = function() {
    
    var drag = 20;
    
    if(mouseIsPressed){
      var dx = mouseX - this.x;
      var dy = mouseY - this.y;
    }else{
      this.newTarget();
      var dx = this.targetX - this.x;
      var dy = this.targetY - this.y;
    }
    
    if(frameCount % 1 == 0){
      this.shuffleArray(this.pastX);
      this.shuffleArray(this.pastY);
      this.pastX[this.pastX.length-1] = this.x
      this.pastY[this.pastY.length-1] = this.y
    }
    
    this.x += random(-this.speed, this.speed) + dx/drag;
    this.y += random(-this.speed, this.speed) + dy/drag;
  };
  
  this.shuffleArray = function(arr) {
    
    if(Array.isArray(arr)){
      for(i=1;i<arr.length;i++){
        arr[i-1] = arr[i];
      }
    }
    
  }
  
  this.newTarget = function(){
    if(this.x > this.targetX-20 && 
     this.x < this.targetX+20 && 
     this.y > this.targetY-20 &&
     this.y < this.targetY+20){
      targetVector = this.randomPointInCircle(height/2);
      console.log(targetVector.x,targetVector.y);
      this.targetX = targetVector.x;
      this.targetY = targetVector.y;
    }
  }
  
  this.randomPointInCircle = function(radius){
    var target = createVector(0,0);
    t = 2*PI*random();
    u = random()+random()
    if(u>1){
      r = 2-u;
    }else{
      r = u;
    }
    target.set(radius*r*cos(t)+width/2, radius*r*sin(t)+height/2)
    return target;
  }
  
  this.overCircle = function(x, y, diameter){
    var disX = x - mouseX;
    var disY = y - mouseY;
    if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
  }

  this.display = function() {
    for(i=0;i<this.pastX.length;i++){
      if(this.pastX[i] != 0 && this.pastY[i] != 0){
        var ialpha = i*254/this.pastX.length
        this.colour.setAlpha(ialpha);
        this.strokecolour.setAlpha(ialpha);
        fill(this.colour);
        stroke(this.strokecolour);
        ellipse(Number(this.pastX[i]), Number(this.pastY[i]), this.diameter, this.diameter);
      }
    }
    this.colour.setAlpha(255);
    this.strokecolour.setAlpha(255);
    fill(this.colour);
    stroke(this.strokecolour);
    alpha(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
