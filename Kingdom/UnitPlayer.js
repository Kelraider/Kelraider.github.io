//Unit Class
function Unit(name) {
  this.name = name;
  this.uClass = null;
  this.magics = [];
  this.skills = [];
  this.perks = [];
  this.bond = null; //later set to this.BondEnum["unknown"]

  this.level = 0;
  this.exp = 0;

  this.MaxHP = 0;
  this.HP = 0;
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
    Console.log("Invalid bondLevel Attempted.");
  } else {
    this.bond = this.bondEnum[bondLevel];
  }
}

Unit.prototype.getMaxHP = function() {
  return this.MaxHP;
}

Unit.prototype.display = function(x, y, w, h) {
  fill(0, 0, 255);
  rect(x, y, w, h);
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
    this.unit1.display(x,y,w,h/3);
  }
  if (this.unit2 != null) {
    this.unit2.display(x,y+ySpacing,w,h/3);
  }
  if (this.unit3 != null) {
    this.unit3.display(x,y+(ySpacing*2),w,h/3);
  }
}
