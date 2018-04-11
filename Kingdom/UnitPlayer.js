//Unit Class
function Unit(name) {
  this.name = name;
  this.uClass = null;
  this.magics = [];
  this.skills = [];
  this.perks = [];
  this.bond = null; //later set to this.BondEnum["unknown"]

  this.level = 1;
  this.exp = 0;

  this.MaxHP = 1;
  this.HP = 1;
  this.Str = 0;
  this.Int = 0;
  this.Def = 0;

  this.activeSkill = null;
  this.activeSkill2 = null;

  this.allSkills = [];
}

Unit.prototype.bondEnum = Object.freeze( {
"unknown":
  1, 
  "mercenary":
  2, 
  "companion":
  3, 
  "friend":
  4, 
  "family":
  5, 
  "harmonious":
  6
}
);

Unit.prototype.setBond = function(bondLevel) {
  if (this.bondEnum[bondLevel] == null) {
    console.warn("Invalid bondLevel Attempted.");
  } else {
    this.bond = this.bondEnum[bondLevel];
  }
}

Unit.prototype.getMaxHP = function() {
  return this.MaxHP;
}

Unit.prototype.display = function(x, y, w, h) {
  
  strokeWeight(1);
  textAlign(LEFT);
  
  //Background
  fill(33);
  rect(x, y, w, h);
  
  stroke(0);
  //NAME
  //FULL SPACE = (x + w*11/64, y + h*1/32, w*39/64, h*8/32)
  fill(0);
  textSize(h*7/32);
  if(textWidth(this.name)<w*39/64){
    rect(x + w*11/64, y + h*1/32, textWidth(this.name), h*8/32);
    fill(255);
    text(this.name,x + w*11/64, y + h*1/32, textWidth(this.name), h*8/32);
  }else{
    rect(x + w*11/64, y + h*1/32, textWidth(this.name.substring(0,9)+"..."), h*8/32);
    fill(255);
    text(this.name.substring(0,9)+"...",x + w*11/64, y + h*1/32, textWidth(this.name.substring(0,9)+"..."), h*8/32);
  }
  
  //BOND
  fill(255,192,203);
  rect(x + w*26/32, y + h*1/32, w*5/32, h*8/32);
  
  //LVL
  fill(255,255,0);
  this.displayLVL(x + w*1/32, y + h*1/32, w*4/32, h*17/32);
  
  //HP
  this.displayHP(x + w*11/64, y + h*10/32, w*51/64, h*7/32);
  
  //EXP
  fill(255,215,0);
  rect(x+ w*1/32, y + h*18/32, w*30/32, h*1/32);
  
  //SKILLS
  fill(255);
  rect(x + w*1/32, y + h*21/32, w*8/32, h*10/32);
  
  //EQUIPMENT
  fill(150);
  rect(x + w*10/32, y + h*21/32, w*21/32, h*10/32);
}

Unit.prototype.displayHP = function(x,y,w,h){
  
  strokeWeight(3);
  fill(200,10,10);
  
  rect(x,y,w,h);
  fill(10,230,10);
  rect(x,y,w,h);
  noStroke();
  fill(255,255,255,100);
  rect(x+3,y+3,w-4,h/2-4);
  
  textAlign(LEFT);
  stroke(0);
  strokeWeight(5);
  textSize(h/2);
  fill(255);
  text("HP",x+5,y+h/2)
  
  
  textAlign(LEFT);
  textSize(h);
  text((this.HP/this.MaxHP)*100+"%",x+w-textWidth((this.HP/this.MaxHP)*100+"%"),y,w*3/24,h);
  
  strokeWeight(0);
}

Unit.prototype.displayLVL = function(x,y,w,h){
  
  rect(x,y,w,h);
  textAlign(RIGHT);
  textSize(h);
  fill(255);
  strokeWeight(4);
  //REDO ALL THIS BELOW
  if(textWidth(this.level)>w){
    textSize(h*6/8);
    if(textWidth(this.level)>w){
      textSize(h/2);
      text(this.level,x+w,y+h*9/10);
    } else {
      
      text(this.level,x+w,y+h*9/10);
    }
  } else {
    textSize(h);
    text(this.level,x+w,y+h*9/10);
  }
  
  textAlign(LEFT);
  textSize(h/4);
  fill(255);
  strokeWeight(2.5);
  text("LVL",x+2.5,y+h/4);
}

//Player Class
function Player(name) {
  Unit.call(this, name);
}

Player.prototype = Object.create(Unit.prototype);
Player.prototype.constructor = Player;
Player.prototype.isPlayer = true;

function Party(unit1, unit2, unit3) {
  this.unit1 = unit1;
  this.unit2 = unit2;
  this.unit3 = unit3;
}

Party.prototype.display = function(x,y,w,h) {
  var ySpacing = h/3;
  
  if (this.unit1 != null) {
    this.unit1.display(x+1,y+1,w-2,h/3-2);
  }
  if (this.unit2 != null) {
    this.unit2.display(x+1,y+ySpacing,w-2,h/3);
  }
  if (this.unit3 != null) {
    this.unit3.display(x+1,y+(ySpacing*2)+1,w-2,h/3-2);
  }
}
