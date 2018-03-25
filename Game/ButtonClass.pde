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
