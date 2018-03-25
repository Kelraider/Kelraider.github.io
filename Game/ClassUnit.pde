//TODO: Additional Parameters?
class Unit{
  
  public String name;
  public PImage portrait;
  
  private double health;
  private double attack;
  private double defence;
  
  private double attackSpeed;
  
  Unit(){
    
    PImage temp;
    try{
      temp = loadImage("Portraits/PortraitTest1.png");
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
  double health, double attack, double defence, double attackSpeed){
    
    this.name = name;
    this.portrait = loadImage(imgPath);
    this.health = health;
    this.attack = attack;
    this.defence = defence;
    this.attackSpeed = attackSpeed;
  }
  
  double GetHealth(){
    return this.health;
  }
  double GetAttack(){
    return this.attack;
  }
  double GetDefence(){
    return this.defence;
  }
  double GetAttackSpeed(){
    return this.attackSpeed;
  }
}
