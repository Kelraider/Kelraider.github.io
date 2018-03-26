function Unit(name, uClass, magics, skills, perks) {
  this.name = name;
  this.uClass = uClass;
  this.magics = magics;
  this.skills = skills;
  this.perks = perks;
  this.BondEnum = Object.freeze( {
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
  this.bond = this.BondEnum.unknown;
  
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
  
