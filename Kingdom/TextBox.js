function TextBox(x, y, w, h) {
  this.pos = createVector(x,y);
  this.sizeW = w;
  this.sizeH = h;
  this.normalColor = color(255);
  this.normalStroke = color(150);
  this.xPadding = 10;
  this.yPadding = 5;
  
  this.innerText = "";
  this.textSize = 20;
  //TODO MAYBE this.textAlignment = "CENTER";
  
  this.isHidden = false;
  this.hiddenColor = color(150);
  this.disabled = false;
  this.disabledColor = color(220);
  
  this.display = function(){
    //CHANGE ME
    if(!this.isHidden){
      if(this.isHovered){
        fill(this.hoveredColor);
        stroke(this.hoveredStroke);
      }else{
        fill(this.normalColor);
        stroke(this.normalStroke);
      }
      //Shape
      rect(this.pos.x,this.pos.y,this.sizeW,this.sizeH);
      //Text
      textAlign(LEFT);
      textSize(this.textSize);
      fill(0);
      noStroke();
      text(this.innerText, 
      this.pos.x+(this.xPadding/2), this.pos.y+(this.yPadding/2), this.sizeW-(this.xPadding/2), this.sizeH-(this.yPadding/2));
    }
  }
  
  this.setText = function(txt){
    this.innerText = txt;
  }
  
}
