//TODO: Display Combat.
class Combat{
  
  private Unit unit1;
  private Unit unit2;
  
  private int posX = width/2;
  private int posY = height/2;
  
  private float unit1CurrentHealth;
  private float unit1CurrentAttack;
  private float unit1CurrentDefence;
  private float unit2CurrentHealth;
  private float unit2CurrentAttack;
  private float unit2CurrentDefence;
  
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
  
  float CalcDmg(Unit source, Unit target){
    float dmgDealt = 0.0;
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
    CombatThread();
    return winner;
  }
  
/*   Thread CombatThread = new Thread() {
     public void run(){
          synchronized (CombatThread) {
          float unit1AttackTimer = 3;
          float unit2AttackTimer = 3;
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
  }; */
  
  public void CombatThread(){
          float unit1AttackTimer = 3;
          float unit2AttackTimer = 3;
          while(unit1CurrentHealth > 0 && unit2CurrentHealth > 0){
      
            if(unit1AttackTimer <= 0){
              Attack(unit1,unit2);
              unit1AttackTimer = 1/unit1.GetAttackSpeed();
              }
              if(unit2AttackTimer<= 0){
                Attack(unit2,unit1);
                unit2AttackTimer = 1/unit2.GetAttackSpeed();
              }
              
              unit1AttackTimer-=0.1;
              unit2AttackTimer-=0.1;
              println(unit1.name+"'s Health is: "+unit1CurrentHealth);
              println(unit2.name+"'s Health is: "+unit2CurrentHealth);
            }
            if(unit1CurrentHealth <= 0){
              winner = unit2;
            }else if (unit2CurrentHealth <= 0){
              winner = unit1;
            }
        }
        
public void Display(){
    
    textSize(52);
    image(unit1.portrait, posX, posY+50, 100, 100);
    text(unit1.name, posX, posY);
    if (unit1CurrentHealth > 0){
      text(unit1CurrentHealth, posX, posY+100);
    }else{
      text("Dead", posX, posY+100);
    }
    
    
    image(unit2.portrait, posX+300, posY+50, 100, 100);
    text(unit2.name, posX+300, posY);
    if (unit2CurrentHealth > 0){
      text((int)unit2CurrentHealth, posX+300, posY+100);
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
    /*synchronized (CombatThread) {
      CombatThread.notify();
    }*/
  }
  
  public void SetPos(int x, int y){
    this.posX = x;
    this.posY = y;
  }
  
}
