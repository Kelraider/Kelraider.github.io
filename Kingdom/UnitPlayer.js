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

Unit.prototype.getInfo = function() {
  return this.color + ' ' + this.type + ' apple';
};

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

Unit.prototype.getMaxHP = function(){
  return this.MaxHP;
}

//Player Class
function Player(name){
  Unit.call(this, name);
}

Player.prototype = Object.create(Unit.prototype);
Player.prototype.constructor = Player;
Player.prototype.isPlayer = true;
