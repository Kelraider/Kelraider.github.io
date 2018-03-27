function Area(name, x, y) {
  this.name = name;
  this.pos = createVector(x, y);
  this.iconSize = 100;
  this.icon = new Button(x, y, this.iconSize, this.iconSize);
  this.icon.normalColor = color(0, 255, 0);
}

Area.prototype.display = function(x, y, iconSize) {
  //rect(x,y,iconSize,iconSize);
  this.icon.displayLoc(x, y, iconSize, iconSize);
}

function Town(name, x, y) {
  Area.call(this, name, x, y);
}

Town.prototype = Object.create(Area.prototype);
Town.prototype.constructor = Area;
Town.prototype.isTown = true;

function Dungeon(name, x, y) {
  Area.call(this, name, x, y);
}

Dungeon.prototype = Object.create(Area.prototype);
Dungeon.prototype.constructor = Area;
Dungeon.prototype.isDungeon = true;

function Map(imgPath, x, y, w, h, bgCol, borderPadding) {
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

Map.prototype.display = function() {
  rect(this.x, this.y, this.w, this.h);
  image(this.map, this.x-this.currentX, this.y-this.currentY);

  //Areas Drawn
  for (i=0; i<this.areas.length; i++) {
    this.areas[i].display(this.areas[i].pos.x+this.x-this.currentX, this.areas[i].pos.y+this.y-this.currentY, this.areas[i].iconSize, this.areas[i].iconSize);
  }

  //Background redrawn
  fill(this.bgCol);
  rect(0, 0, width-this.w-this.bP, height);
  rect(this.x, 0, this.w, this.y);
  rect(this.x, this.y+this.h, this.w, height-this.y-this.bP);
  rect(this.x+this.w, 0, this.bP, height);
  //Stroke border
  fill(0);
  rect(this.x, this.y, this.w, this.mapStroke);
  rect(this.x, this.y, this.mapStroke, this.h);
  rect(this.x+this.w-this.mapStroke, this.y, this.mapStroke, this.h);
  rect(this.x, this.y+this.h-this.mapStroke, this.w, this.mapStroke);
}

Map.prototype.update = function() {

  //console.log((this.currentY+this.pastMouseY-mouseY) <= (this.map.height-this.y))
  if (this.pastMouseX != null && this.pastMouseY != null) {
    if ((this.currentX+this.pastMouseX-mouseX) >= 0 && (this.currentX+this.pastMouseX-mouseX) <= (this.map.width-this.w)) {
      this.currentX+=this.pastMouseX-mouseX;
    }
    if ((this.currentY+this.pastMouseY-mouseY) >= 0 && (this.currentY+this.pastMouseY-mouseY) <= (this.map.height-this.h)) {
      this.currentY+=this.pastMouseY-mouseY;
    }
  }
  //console.log(mouseX, this.pastMouseX);
  this.pastMouseX = mouseX;
  this.pastMouseY = mouseY;

  //console.log(this.currentX,this.currentY);
}

function overMap(map) {
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

function mapOnHover(map) {
  if (overMap(map)) {
    for (i=0; i<map.areas.length; i++) {
      if (overButton(map.areas[i].icon)) {
        map.areas[i].icon.isHovered = true;
      } else {
        map.areas[i].icon.isHovered = false;
      }
    }
  }
}
