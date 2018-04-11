function TextBox(x, y, w, h) {
  this.pos = createVector(x, y);
  this.sizeW = w;
  this.sizeH = h;
  this.normalColor = color(23);
  this.normalStroke = color(150);
  this.xPadding = 20;
  this.yPadding = 20;

  this.innerText = "";
  this.txtColor = color(255);
  this.txtSize = 20;
  //TODO MAYBE this.textAlignment = "CENTER";

  this.isHidden = false;
  this.hiddenColor = color(150);
  this.disabled = false;
  this.disabledColor = color(220);
}
TextBox.prototype.getX = function() {
  return this.pos.x;
}
TextBox.prototype.getY = function() {
  return this.pos.y;
}
TextBox.prototype.getW = function() {
  return this.sizeW;
}
TextBox.prototype.getH = function() {
  return this.sizeH;
}

TextBox.prototype.setText = function(txt) {
  this.innerText = txt;
}

TextBox.prototype.append = function(txt,numNewLines){
  
  var strNewLines;
  if (numNewLines == null){
    strNewLines = "";
  }else{
    strNewLines = "\n".repeat(numNewLines);
  this.innerText+= strNewLines + txt;
  }
}

TextBox.prototype.display = function() {
  //CHANGE ME
  if (!this.isHidden) {
    if (this.isHovered) {
      fill(this.hoveredColor);
      stroke(this.hoveredStroke);
    } else {
      fill(this.normalColor);
      stroke(this.normalStroke);
    }
    //Shape
    rect(this.pos.x, this.pos.y, this.sizeW, this.sizeH);
    //Text
    textAlign(LEFT);
    textSize(this.txtSize);
    fill(0);
    noStroke();
    fill(this.txtColor);
    text(this.innerText, 
      this.pos.x+(this.xPadding/2), this.pos.y+(this.yPadding/2), this.sizeW-(this.xPadding/2), this.sizeH-(this.yPadding/2));
  }
}

TextBox.prototype.reSize = function(x, y, w, h) {
  this.pos = createVector(x, y);
  this.sizeW = w;
  this.sizeH = h;
}



function MainTextBox(x, y, w, h) {
  TextBox.call(this, x, y, w, h);
}

MainTextBox.prototype = Object.create(TextBox.prototype);
MainTextBox.prototype.constructor = TextBox;
MainTextBox.prototype.isMainTextBox = true;

function OptionTextBox(x, y, w, h) {
  TextBox.call(this, x, y, w, h);

  this.currentOptionsState = 0;
  this.options = []; //Array containing Array of Options. Options are simply Buttons.
}

OptionTextBox.prototype = Object.create(TextBox.prototype);
OptionTextBox.prototype.constructor = TextBox;
OptionTextBox.prototype.isOptionTextBox = true;

OptionTextBox.prototype.display = function() {
  TextBox.prototype.display.call(this);

  this.displayCurrentOptions();
}

OptionTextBox.prototype.displayCurrentOptions = function() {

  if (this.options[this.currentOptionsState].constructor === Array) {

    for (j=0; j<this.options[i].length; j++) {
      this.options[this.currentOptionsState][j].displayLoc(this.getX() + this.xPadding, this.getY() + this.yPadding + (this.yPadding*2*j+1), this.options[this.currentOptionsState][j].getW(), this.options[this.currentOptionsState][j].getH());
    }
  } else {
    console.warn("Tried to display options not in an array");
  }
}

OptionTextBox.prototype.addState = function(opsArray) {

  this.options.push(opsArray);
}
OptionTextBox.prototype.setState = function(optionsState) {

  if (!optionChanged) {
    this.currentOptionsState = optionsState;
   
    for (i=0; i<this.options.length; i++) {
      //Set INACTIVE Tabs component InActive
      for (j=0; j<this.options[i].length; j++) {
        //Disable Buttons
        if (this.options[i][j].isButton) {
          this.options[i][j].isHidden = true;
        }
      }
    }
  }
    //Set ACTIVE Tabs component Active
    for (j=0; j<this.options[this.currentOptionsState].length; j++) {
      if (this.options[this.currentOptionsState][j].isButton) {
        this.options[this.currentOptionsState][j].isHidden = false;
      }
    }
  optionChanged = true; //Option Changed must exist as a global variable, it must also update back to false every frame.
}


OptionTextBox.prototype.addOption = function() {
}


function LogTextBox(x, y, w, h) {
  TextBox.call(this, x, y, w, h);
}

LogTextBox.prototype = Object.create(TextBox.prototype);
LogTextBox.prototype.constructor = TextBox;
LogTextBox.prototype.isLogTextBox = true;
