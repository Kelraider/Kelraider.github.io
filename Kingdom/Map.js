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

function Map(imgPath){
  this.map = loadImage(imgPath);
  this.areas = [];
}

Map.prototype.display = function(x,y,w,h){
  rect(x,y,w,h);
  image(this.map,x+1,y+1,w-2,h-2);
}
