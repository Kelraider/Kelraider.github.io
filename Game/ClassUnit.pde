//TODO: Additional Parameters?
class Unit{
  
  public String name;
  public PImage portrait;
  
  private float health;
  private float attack;
  private float defence;
  
  private float attackSpeed;
  
  Unit(){
    
    PImage temp;
    try{
      temp = loadImage("data/Portraits/PortraitTest1.png");
    }catch (Exception e){
     temp = null;
    }
    
    this.name = "Base";
    this.portrait = temp;
    
    this.health = 1;
    this.attack = 1;
    this.defence = 1;
    this.attackSpeed = 1;
  }
  
  Unit(String name, String imgPath, 
  float health, float attack, float defence, float attackSpeed){
    
    PImage temp;
    try{
      temp = loadImage(imgPath);
    }catch (Exception e){
     temp = null;
    }
    
    this.name = name;
    this.portrait = temp;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
    this.attackSpeed = attackSpeed;
  }
  
  float GetHealth(){
    return this.health;
  }
  float GetAttack(){
    return this.attack;
  }
  float GetDefence(){
    return this.defence;
  }
  float GetAttackSpeed(){
    return this.attackSpeed;
  }
}
