function Container(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.tabs = [];
  this.objs = [];
  this.party = null;
  
}

Container.prototype.display = function(){
  this.displayBorder();
}

Container.prototype.displayBorder = function(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  rect(this.x,this.y,this.w,this.h);
}

Container.prototype.add = function(obj){
  this.objs.push(obj);
}

Container.prototype.reSize = function(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

function PartyContainer(x,y,w,h){
  Container.call(this,x,y,w,h);
}

PartyContainer.prototype = Object.create(Container.prototype);
PartyContainer.prototype.constructor = Container;
PartyContainer.prototype.isPartyContainer = true;

PartyContainer.prototype.display = function(){ 
  this.displayBorder();
  
  if(this.party != null){
    this.party.display(this.x, this.y, this.w, this.h);
  }else{
    console.warn("Tried to display null party.");
  }
  
  
}
