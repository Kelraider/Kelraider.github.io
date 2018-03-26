var bgCol;
var mapW;
var mapH;

var borderPadding;

var firstButton;
var secondButton;
var firstTextBox;

var firstUnit;
var player;

var mapGlobal;

function setup() {
  //TODO Auto Re-size
  
  borderPadding = 8;
  
  createCanvas(window.innerWidth, window.innerHeight);
  bgCol = color(230, 230, 230)
  background(bgCol);
  
  mapH = height/2;
  mapW = width/3;

  setupTextBoxes();
  setupButtons();
  secondButton.pos = createVector(firstButton.pos.x+firstButton.sizeW+30, firstButton.pos.y);
  firstTextBox.sizeW = firstButton.sizeW + secondButton.sizeW + 30;
  
  firstUnit = new Unit("Dany");
  player = new Player("Fred");
  console.log(firstUnit.getMaxHP());
  console.log(player.getMaxHP());
  
  mapGlobal = new Map("assets/mapTest.png",width-mapW-borderPadding,borderPadding,mapW,mapH,bgCol,borderPadding)
}

function draw() {
  //Draw Three Main Boxes
  mapGlobal.display();
  strokeWeight(2);
  stroke(0);
  fill(255);
  //Left Rect
  rect(borderPadding,borderPadding,width-mapW-(borderPadding*3),height-(borderPadding*2));
  //Bottom Right Rect
  rect(width-mapW-borderPadding,mapH+(borderPadding*2),mapW,height-mapH-(borderPadding*3));
  //Map Border
  rect();
  
  
  mouseOver();
  
  strokeWeight(1);

  //Insert State Wrapper
  firstButton.display();
  secondButton.display();
  firstTextBox.display();

}

function mousePressed() {
  //Insert State Wrapper to reduce cost
  if (butOnClick(firstButton)) {
    //do something
    console.log("Hi.");
  }
  if (butOnClick(secondButton)) {
    //do something
    console.log("Hello!");
  }
  
  if(overMap(mapGlobal)){
    mapGlobal.pastMouseX = mouseX;
    mapGlobal.pastMouseY = mouseY;
  }
  
  
  return false;
}

function mouseDragged(){
  if(overMap(mapGlobal)){
    mapGlobal.update()
  }
}

function mouseOver() {
  cursor(ARROW);
  butOnHover(firstButton);
  butOnHover(secondButton);
  //Add butOnHover(button) here to add hover effect.
}

function setupButtons() {
  firstButton = new Button(200, 200, 0, 30);
  firstButton.setText("I'm not ready for that yet.");

  secondButton = new Button(0, 0, 0, 30);
  secondButton.setText("OK.");
}

function setupTextBoxes() {
  firstTextBox = new TextBox(200, 100, 250, 80);
  firstTextBox.setText("Are you ready to begin your super epic adventure?");
}
