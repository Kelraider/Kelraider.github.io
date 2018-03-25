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
  
  myUnit1 = new Unit("U1","data/Portraits/PortraitTest1.png",10.1,5,4,1);
  myUnit2 = new Unit("U2","data/Portraits/PortraitTest2.png",8.6,7,4,0.5);
  
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
