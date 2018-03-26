function Area(name,x,y){
  this.name = name;
  this.pos = createVector(x,y);
}

function Town(){
  Area.Call();
}

Town.prototype = Object.create(Area.prototype);
Town.prototype.constructor = Area;
Town.prototype.isTown = true;

function Dungeon(){
  Area.Call();
}

Dungeon.prototype = Object.create(Area.prototype);
Dungeon.prototype.constructor = Area;
Dungeon.prototype.isDungeon = true;

function Map(imgPath, x, y, w, h, bgCol, borderPadding){
  this.map = loadImage(imgPath);
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.bgCol = bgCol;
  this.bP = borderPadding;
  this.mapStroke = 4;
  
  this.currentX = 0;
  this.currentY = 0;
  this.isSelected = false;
  this.pastMouseX = null;
  this.pastMouseY = null;
  this.zoom = 1;
  
  
  this.areas = [];
}

Map.prototype.display = function(){
  fill(255,0,0);
  rect(this.x,this.y,this.w,this.h);
  image(this.map,this.x-this.currentX,this.y-this.currentY);
  //Background redrawn
  fill(this.bgCol);
  rect(0,0,width-this.w-this.bP,height);
  rect(this.x,0,this.w,this.y);
  rect(this.x,this.y+this.h,this.w,height-this.y-this.bP);
  rect(this.x+this.w,0,this.bP,height);
  //Stroke border
  fill(0);
  rect(this.x,this.y,this.w,this.mapStroke);
  rect(this.x,this.y,this.mapStroke,this.h);
  rect(this.x+this.w-this.mapStroke,this.y,this.mapStroke,this.h);
  rect(this.x,this.y+this.h-this.mapStroke,this.w,this.mapStroke);
}

Map.prototype.update = function(){
  
  console.log(this.currentY,(this.h+this.y));
  console.log((this.currentY+this.pastMouseY-mouseY) <= (this.h+this.y))
  if(this.pastMouseX != null && this.pastMouseY != null){
    if((this.currentX+this.pastMouseX-mouseX) >= 0 && (this.currentX+this.pastMouseX-mouseX) <= (this.w+this.x)){
      this.currentX+=this.pastMouseX-mouseX;
    }
    if((this.currentY+this.pastMouseY-mouseY) >= 0 && (this.currentY+this.pastMouseY-mouseY) <= (this.map.height-this.y)){
      this.currentY+=this.pastMouseY-mouseY;
    }
    
  }
  //console.log(mouseX, this.pastMouseX);
  this.pastMouseX = mouseX;
  this.pastMouseY = mouseY;
  
  //console.log(this.currentX,this.currentY);
  
  
}

function overMap(map){
  var mapX = map.x;
  var mapY = map.y;
  var mapWidth = map.w;
  var mapHeight = map.h;
  
  if (mouseX >= mapX && mouseX <= mapX+mapWidth && 
      mouseY >= mapY && mouseY <= mapY+mapHeight) {
    return true;
  } else {
    return false;
  }
}
