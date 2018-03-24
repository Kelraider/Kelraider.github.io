float xpos;
float ypos;
float drag = 30.0;

void setup(){
  size(300,300);
  background(255, 204, 0);
  ypos = height/2;
}

void draw(){
  background(255, 204, 0);
  
  float dx = mouseX - xpos;
  if (dx/drag < 5 && dx/drag > 0.5){
    xpos+=5;
    fill(255,255,0);
    rect(xpos,ypos,5,5);
  }if(dx/drag > -5 && dx/drag < -0.5){
    xpos-=5;
    fill(0,255,255);
    rect(xpos,ypos,5,5);
  }else{
    xpos = xpos + dx/drag;
    fill(255,0,0);
    rect(xpos,ypos,5,5);
  }
  println(dx/drag);
}
