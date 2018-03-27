//Canvas and Layout
var bgCol;
var mapW;
var mapH;
var borderPadding;

//UI Elements
var firstButton;
var secondButton;
var firstTextBox;
  //Maps
var mapGlobal;
  //Areas
var area1;
var area2;
var area3;

//Units and Player
var firstUnit;
var player;



function setup() {
  //TODO Auto Re-size
  
  borderPadding = 8;
  
  //
  createCanvas(window.innerWidth, window.innerHeight);
  bgCol = color(230, 230, 230)
  background(bgCol);
  
  //Define mapH and mapW;
  mapH = height/2;
  mapW = width/3;
  
  //Setup UI elements
  setupTextBoxes();
  setupButtons();
  secondButton.pos = createVector(firstButton.pos.x+firstButton.sizeW+30, firstButton.pos.y);
  firstTextBox.sizeW = firstButton.sizeW + secondButton.sizeW + 30;
  
  //Unit and Player Creation
  firstUnit = new Unit("Dany");
  player = new Player("Fred");
  
  //Setup Map and Areas
  mapGlobal = new Map("assets/mapTestLarge.png",width-mapW-borderPadding,borderPadding,mapW,mapH,bgCol,borderPadding)
  setupAreas(mapGlobal);
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
  
  mapOnHover(mapGlobal);
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

function setupAreas(map) {
  area1 = new Area("testing123",0,0);
  area2 = new Town("wowlmao",100,100);
  area3 = new Dungeon("ohnoaspookyghost",200,200);
  
  map.areas.push(area1);
  map.areas.push(area2);
  map.areas.push(area3);
}
