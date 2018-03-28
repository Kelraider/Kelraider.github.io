function Button(x, y, w, h) {
  this.pos = createVector(x,y);
  this.sizeW = w;
  this.sizeH = h;
  this.normalColor = color(255);
  this.normalStroke = color(150);
  
  this.innerText = "";
  this.textSize = 20;
  //TODO MAYBE this.textAlignment = "CENTER";
  
  this.isHovered = false;
  this.hoveredColor = color(235);
  this.hoveredStroke = color(120);
  this.isHidden = false;
  this.disabled = false;
  this.disabledColor = color(220);
  
}
Button.prototype.isButton = true;
Button.prototype.getX = function(){
  return this.pos.x;
}
Button.prototype.getY = function(){
  return this.pos.y;
}
Button.prototype.getW = function(){
  return this.sizeW;
}
Button.prototype.getH = function(){
  return this.sizeH;
}

Button.prototype.setX = function(x){
  this.pos.x = x;
}
Button.prototype.setY = function(y){
  this.pos.y = y;
}
Button.prototype.setW = function(w){
  this.sizeW = w;
}
Button.prototype.setH = function(h){
  this.sizeH = h;
}


Button.prototype.setText = function(txt){
  textSize(this.textSize);
    if(textWidth(txt) > this.sizeW){
      this.sizeW = textWidth(txt)+20;
    }
    this.innerText = txt;
}

Button.prototype.display = function(){
  strokeWeight(1);
  
  if(!this.isHidden){
      if(this.isHovered){
        butCheckHover(this);
        cursor(HAND);
        fill(this.hoveredColor)
        stroke(this.hoveredStroke);
      }else{
        fill(this.normalColor)
        stroke(this.normalStroke);
      }
      //Shape
      rect(this.pos.x,this.pos.y,this.sizeW,this.sizeH);
      //Text
      textAlign(CENTER);
      textSize(this.textSize);
      fill(0);
      noStroke();
      text(this.innerText, 
      this.pos.x+3, this.pos.y+(this.sizeH/2)-(this.textSize/2), this.sizeW, this.sizeH);
    }
}

Button.prototype.displayLoc = function(x,y,w,h){
  this.pos.x = x;
  this.pos.y = y;
  this.sizeW = w;
  this.sizeH = h;
  
  this.display();
}

function butCheckHover(but){
  if(!overButton(but)){
    but.isHovered = false;
  }
}

function overButton(but){
  var buttonX = but.pos.x;
  var buttonY = but.pos.y;
  var buttonWidth = but.sizeW;
  var buttonHeight = but.sizeH;
  
  if (mouseX >= buttonX && mouseX <= buttonX+buttonWidth && 
      mouseY >= buttonY && mouseY <= buttonY+buttonHeight) {
    return true;
  } else {
    return false;
  }
}

function butOnHover(but){
  if (overButton(but)){
    but.isHovered = true;
  }else{
    //but.isHovered = false;
  }
}

function butOnClick(but){
  if(!but.disabled & !but.isHidden){
    return overButton(but);
  }else{
    return false;
  }
}

function Tab(x, y, w, h){
  Button.call(this, x, y, w, h);
  
  this.container = null;
  this.objs = [];
}

Tab.prototype = Object.create(Button.prototype);
Tab.prototype.constructor = Button;
Tab.prototype.isTab = true;

Tab.prototype.onClick = function(){
  this.container.setActiveTab(this);
}

Tab.prototype.add = function(obj){
  this.objs.push(obj);
}

Tab.prototype.reSize = function(x,y,w,h){
  this.pos = createVector(x,y);
  this.sizeW = w;
  this.sizeH = h;
}

  
