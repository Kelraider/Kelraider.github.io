Button clickMe;
Button clickMeToo;
color backgroundColor;

Unit myUnit1;
Unit myUnit2;

Combat currentCombat;
Combat anotherCurrentCombat;

void setup() {
  size(1280, 720);
  backgroundColor = color(255,0,0);
  clickMe = new Button(200,500,100,100);
  clickMeToo = new Button(400,500,100,100);
  
  myUnit1 = new Unit("U1","Portraits/PortraitTest1.png",10,5,4,1);
  myUnit2 = new Unit("U2","Portraits/PortraitTest2.png",8,7,4,0.5);
  
  currentCombat = new Combat(myUnit1, myUnit2);
  anotherCurrentCombat = new Combat(myUnit1, myUnit2);
  currentCombat.DoCombat();
  anotherCurrentCombat.DoCombat();
  anotherCurrentCombat.SetPos(50,50);
}

void draw() {
  background(backgroundColor);

  mouseOver();
  clickMe.Display();
  clickMeToo.Display();
  currentCombat.Display();
  anotherCurrentCombat.Display();
}

void mousePressed() {
  if (OverButton(clickMe)){
    if(currentCombat.IsPaused()){
      //Unpause
      currentCombat.Resume();
      backgroundColor = color(255,0,0);
    }else{
      //Pause
      currentCombat.Pause();
      backgroundColor = color(255,255,0);
    }
  }
  
  if (OverButton(clickMeToo)){
    if(anotherCurrentCombat.IsPaused()){
      //Unpause
      anotherCurrentCombat.Resume();
      backgroundColor = color(255,0,0);
    }else{
      //Pause
      anotherCurrentCombat.Pause();
      backgroundColor = color(255,255,0);
    }
  }
}

void mouseOver(){
  if (OverButton(clickMe)){
    clickMe.IsHovered(true);
  }else{
    clickMe.IsHovered(false);
  }
}

//TODO: Hidden, Enabled, Text Features.
class Button {
  private int posX;
  private int posY;
  private int sizeW;
  private int sizeH;
  private String alignment;
  private boolean hidden = false;
  private boolean enabled = true;
  
  private int stroke;
  private color fill;
  
  private boolean isHovered = false;
  private color hoverFill;
  
  Button(int posX, int posY, int sizeW, int sizeH){
    this.posX = posX;
    this.posY = posY;
    this.sizeW = sizeW;
    this.sizeH = sizeH;
    
    this.alignment = "LEFT";
    this.stroke = 10;
    this.fill = color(0,0,0);
    this.hoverFill = color(20,20,20);
  }
  
  Button(int posX, int posY, int sizeW, int sizeH, int stroke, color fill){
    this.posX = posX;
    this.posY = posY;
    this.sizeW = sizeW;
    this.sizeH = sizeH;
    this.stroke = stroke;
    this.fill = fill;
  }
  
  void Display(){
    stroke(stroke);
    if(this.isHovered){
      fill(hoverFill);
      cursor(HAND);
    }else{
      fill(fill);
      cursor(ARROW);
    }
    if (!this.hidden){
      rect(this.posX, this.posY, this.sizeW, this.sizeH);
    }
    
  }
  
  void SetAlignment(String align){
    if(align.toUpperCase() == "LEFT" || align.toUpperCase() == "CENTER" || align.toUpperCase() == "RIGHT"){
      this.alignment = align;
    } else {
      print("Invalid Alignment: "+align);
    }
  }
  
  public int GetPosX(){
    return this.posX;
  }
  
  public int GetPosY(){
    return this.posY;
  }
  
  public int GetSizeW(){
    return this.sizeW;
  }
  
  public int GetSizeH(){
    return this.sizeH;
  }
  
  public void IsHovered(boolean flag){
    this.isHovered = flag;
  }
}

boolean OverButton(Button but){
  
  int buttonX = but.GetPosX();
  int buttonY = but.GetPosY();
  int buttonWidth = but.GetSizeW();
  int buttonHeight = but.GetSizeH();
  
  if (mouseX >= buttonX && mouseX <= buttonX+buttonWidth && 
      mouseY >= buttonY && mouseY <= buttonY+buttonHeight) {
    return true;
  } else {
    return false;
  }
}


/*boolean overCircle(int x, int y, int diameter) {
  float disX = x - mouseX;
  float disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}*/

//TODO: Display Combat.

import java.util.concurrent.TimeUnit;

class Combat{
  
  private Unit unit1;
  private Unit unit2;
  
  private int posX = width/2;
  private int posY = height/2;
  
  private double unit1CurrentHealth;
  private double unit1CurrentAttack;
  private double unit1CurrentDefence;
  private double unit2CurrentHealth;
  private double unit2CurrentAttack;
  private double unit2CurrentDefence;
  
  private boolean isPaused = false;
  private Unit winner = null;
  
  Combat(Unit unit1, Unit unit2){
    this.unit1 = unit1;
    this.unit2 = unit2;
    
    this.unit1CurrentHealth = unit1.GetHealth();
    this.unit1CurrentAttack = unit1.GetAttack();
    this.unit1CurrentDefence = unit1.GetDefence();
    
    this.unit2CurrentHealth = unit2.GetHealth();
    this.unit2CurrentAttack = unit2.GetAttack();
    this.unit2CurrentDefence = unit2.GetDefence();
  }
  
  double CalcDmg(Unit source, Unit target){
    double dmgDealt = 0.0;
    dmgDealt = source.GetAttack()-target.GetDefence();
    if (dmgDealt < 0.0){
      dmgDealt = 0.0;
    }
    return dmgDealt;
  }
  
  private void Attack(Unit source, Unit target){
    if(source == unit1){
      this.unit2CurrentHealth -= CalcDmg(source, target);
    }else if(source == unit2){
      this.unit1CurrentHealth -= CalcDmg(source, target);
    }else{
      print("Somehow, Combat failed. Source: "+source+", Target: "+target+".");
    }
  }
  
  public Unit DoCombat(){
    Unit winner = this.unit1;
    this.CombatThread.start();
    return winner;
  }
  
  Thread CombatThread = new Thread() {
      /*public void run() {
          try {
              System.out.println("Does it work?");
  
              Thread.sleep(1000);
  
              System.out.println("Nope, it doesnt...again.");
          } catch(InterruptedException v) {
              System.out.println(v);
          }
      }*/
      public void run(){
          synchronized (CombatThread) {
          double unit1AttackTimer = 3;
          double unit2AttackTimer = 3;
          while(unit1CurrentHealth > 0 && unit2CurrentHealth > 0){
            
            if (IsPaused()) {
                    try {
                        CombatThread.wait();
                    } catch (InterruptedException ex) {
                        break;
                    }
            }
            
            if(unit1AttackTimer <= 0){
              Attack(unit1,unit2);
              unit1AttackTimer = 1/unit1.GetAttackSpeed();
              }
              if(unit2AttackTimer<= 0){
                Attack(unit2,unit1);
                unit2AttackTimer = 1/unit2.GetAttackSpeed();
              }
              
              try {
                Thread.sleep(100);
              }catch (InterruptedException ex) {
                break;
              }
              
              unit1AttackTimer-=0.1;
              unit2AttackTimer-=0.1;
              println(unit1.name+"'s Health is: "+unit1CurrentHealth);
              //println(unit2.name+"'s Health is: "+unit2CurrentHealth);
            }
            if(unit1CurrentHealth <= 0){
              winner = unit2;
            }else if (unit2CurrentHealth <= 0){
              winner = unit1;
            }
        }
     }
  };
public void Display(){
    
    textSize(52);
    image(unit1.portrait, posX, posY+50, 100, 100);
    text(unit1.name, posX, posY);
    if (unit1CurrentHealth > 0){
      text(String.valueOf(unit1CurrentHealth), posX, posY+100);
    }else{
      text("Dead", posX, posY+100);
    }
    
    
    image(unit2.portrait, posX+300, posY+50, 100, 100);
    text(unit2.name, posX+300, posY);
    if (unit2CurrentHealth > 0){
      text(String.valueOf(unit2CurrentHealth), posX+300, posY+100);
    }else{
      text("Dead", posX+0, posY+100);
    }
    
  }
  
  public boolean IsPaused(){
    return this.isPaused;
  }
  
  public void Pause(){
    this.isPaused = true;
  }
  
  public void Resume(){
    this.isPaused = false;
    synchronized (CombatThread) {
      CombatThread.notify();
    }
  }
  
  public void SetPos(int x, int y){
    this.posX = x;
    this.posY = y;
  }
  
}

//TODO: Additional Parameters?
class Unit{
  
  public String name;
  public PImage portrait;
  
  private double health;
  private double attack;
  private double defence;
  
  private double attackSpeed;
  
  Unit(){
    this.name = "Base";
    this.portrait = loadImage("Portraits/PortraitTest1.png");
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

class Test{
  private int testNum;
  
  Test(int val){
    testNum = val;
  }
  
  int getTestNum(){
    return testNum;
  }
}
