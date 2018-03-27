//Canvas and Layout
var bgCol;
var mapW;
var mapH;
var borderPadding;

//UI Elements
//Containers
var mainContainer;
var partyContainer;

//Buttons
var firstButton;
var secondButton;
var firstTextBox;
  //Maps
    //Preload Images
var mapGlobalImg;
var mapGlobal;


  //Areas
var area1;
var area2;
var area3;

//Units and Player
var firstUnit;
var secondUnit;
var player;


//Parties
var party1;

function preload(){
  mapGlobalImg = loadImage("assets/mapTest.png");
}

function setup() {
  //TODO Auto Re-size
  
  borderPadding = 8;
  
  //
  createCanvas(window.innerWidth, window.innerHeight);
  bgCol = color(230, 230, 230)
  background(bgCol);
  
  //Define mapH and mapW;
  mapW = width/3;
  mapH = height/2;
  
  //Setup Containers
  mainContainer = new Container(borderPadding, borderPadding, width-mapW-(borderPadding*3), height-(borderPadding*2));
  partyContainer = new PartyContainer(width-mapW-borderPadding,mapH+(borderPadding*2),mapW,height-mapH-(borderPadding*3));
  
  //Setup UI elements
  setupTextBoxes();
  setupButtons();
  firstTextBox.sizeW = firstButton.sizeW + secondButton.sizeW + 30;
  
  //Unit and Player Creation
  firstUnit = new Unit("Dany");
  secondUnit = new Unit("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
  player = new Player("Fred");
  
  //Party Creation
  party1 = new Party(player, firstUnit, secondUnit);
  partyContainer.party = party1;
  
  //Setup Map and Areas
  mapGlobal = new Map(mapGlobalImg,width-mapW-borderPadding,borderPadding,mapW,mapH,bgCol,borderPadding);
  setupAreas(mapGlobal);
  
  
}

function draw() {
  mouseOver();
  //Draw Three Main Boxes
  mapGlobal.display();

  //Container Display
  mainContainer.display();
  
  //Party Display
  partyContainer.display();
  
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
  
  //Map Code, Insert State Wrapper Here too maybe
  if (butOnClick(area1.icon)) {
    //do something
    console.log("Working!");
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

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);

  //Map Resize
  mapW = width/3;
  mapH = height/2;
  mapGlobal.reSize(width-mapW-borderPadding, borderPadding, mapW, mapH);
  
  //Container Resize
  mainContainer.reSize(borderPadding, borderPadding, width-mapW-(borderPadding*3), height-(borderPadding*2));
  partyContainer.reSize(width-mapW-borderPadding,mapH+(borderPadding*2),mapW,height-mapH-(borderPadding*3));
  
  //Button Resize
}

function mouseOver() {
  cursor(ARROW);
  butOnHover(firstButton);
  butOnHover(secondButton);
  //Add butOnHover(button) here to add hover effect.
  
  mapOnHover(mapGlobal);
}

function setupButtons() {
  
  //MainContainer Buttons
  firstButton = new Button(200, 200, 0, 30);
  firstButton.setText("I'm not ready for that yet.");
  
  secondButton = new Button(0, 0, 0, 30);
  secondButton.pos = createVector(firstButton.pos.x+firstButton.sizeW+30, firstButton.pos.y);
  secondButton.setText("OK.");
  
  mainContainer.add(firstButton);
  mainContainer.add(secondButton);
  
  //PartyContainer Buttons
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
