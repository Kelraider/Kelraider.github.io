//Canvas and Layout
var bgCol;
var mapW;
var mapH;
var borderPadding;

//UI Elements
//Containers
var mainContainer;
var partyContainer;

//Tabs
var mainTab1;
var mainTab2;
var mainTab3;
var mainTab4;
var mainTab5;

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
  //Setup Container Tabs
  mainTab1 = new Tab(mainContainer.x+1, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab2 = new Tab(mainContainer.x+mainContainer.w/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab3 = new Tab(mainContainer.x+mainContainer.w*2/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab4 = new Tab(mainContainer.x+mainContainer.w*3/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab5 = new Tab(mainContainer.x+mainContainer.w*4/5-2, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab1.innerText = "Tab1";
  mainTab2.innerText = "Tab2";
  mainTab3.innerText = "Tab3";
  mainTab4.innerText = "Tab4";
  mainTab5.innerText = "Tab5";
  
  mainTab1.container = mainContainer;
  mainTab2.container = mainContainer;
  mainTab3.container = mainContainer;
  mainTab4.container = mainContainer;
  mainTab5.container = mainContainer;
  mainContainer.tabs.push(mainTab1);
  mainContainer.tabs.push(mainTab2);
  mainContainer.tabs.push(mainTab3);
  mainContainer.tabs.push(mainTab4);
  mainContainer.tabs.push(mainTab5);
  mainContainer.activeTab = mainContainer.tabs[0];
  
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
  //Map Display
  mapGlobal.display();
  //Container Display
  mainContainer.display();
  //Party Display
  partyContainer.display();
  
  strokeWeight(1);
  
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
  
  //Tabs Resize
  mainTab1.reSize(mainContainer.x+1, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab2.reSize(mainContainer.x+mainContainer.w/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab3.reSize(mainContainer.x+mainContainer.w*2/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab4.reSize(mainContainer.x+mainContainer.w*3/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab5.reSize(mainContainer.x+mainContainer.w*4/5-2, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  
  //Button Resize

}

function mousePressed() {
  //Tabs
  if (butOnClick(mainTab1)) {
    //do something
    mainTab1.onClick();
  }
  if (butOnClick(mainTab2)) {
    //do something
    mainTab2.onClick();
  }
  if (butOnClick(mainTab3)) {
    //do something
    mainTab3.onClick();
  }
  if (butOnClick(mainTab4)) {
    //do something
    mainTab4.onClick();
  }
  if (butOnClick(mainTab5)) {
    //do something
    mainTab5.onClick();
  }
  
  
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

function mouseOver() {
  cursor(ARROW);
  //Tabs
  butOnHover(mainTab1);
  butOnHover(mainTab2);
  butOnHover(mainTab3);
  butOnHover(mainTab4);
  butOnHover(mainTab5);
  
  
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
  
  mainContainer.tabs[1].add(firstTextBox);
}

function setupAreas(map) {
  area1 = new Area("testing123",0,0);
  area2 = new Town("wowlmao",100,100);
  area3 = new Dungeon("ohnoaspookyghost",200,200);
  
  map.areas.push(area1);
  map.areas.push(area2);
  map.areas.push(area3);
}
