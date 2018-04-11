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

var partyTab;
var logTab;

//Maps
//Preload Images
var mapGlobalImg;
var mapGlobalSneakImg;
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

//Scene Management
var currentScene = null;

function preload() {
  mapGlobalImg = loadImage("assets/MapRegionSneak.png");
  mapGlobalSneakImg = loadImage("assets/MapSneak.png");
}

function setup() {
  borderPadding = 8;

  //Setup Canvas
  createCanvas(window.innerWidth, window.innerHeight);
  bgCol = color(60, 60, 60);
  background(bgCol);

  //Define mapH and mapW;
  //mapW = width*5/12;
  mapW = width/3;
  mapH = height/2;

  //Setup Containers
  mainContainer = new Container(borderPadding, borderPadding, width-mapW-(borderPadding*3), height-(borderPadding*2));
  partyContainer = new PartyContainer(width-mapW-borderPadding, mapH+(borderPadding*2), mapW, height-mapH-(borderPadding*3));
  //Setup Container Tabs
  mainTab1 = new Tab(mainContainer.x+1, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab2 = new Tab(mainContainer.x+mainContainer.w/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab3 = new Tab(mainContainer.x+mainContainer.w*2/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab4 = new Tab(mainContainer.x+mainContainer.w*3/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab5 = new Tab(mainContainer.x+mainContainer.w*4/5-2, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab1.innerText = "World";
  mainTab2.innerText = "";
  mainTab3.innerText = "";
  mainTab4.innerText = "";
  mainTab5.innerText = "";

  partyTab = new PartyTab(partyContainer.x+1, partyContainer.y+1, partyContainer.w/2 - 1, partyContainer.h/20);
  logTab = new Tab(partyContainer.x+partyContainer.w/2, partyContainer.y+1, partyContainer.w/2 - 2, partyContainer.h/20);
  partyTab.innerText = "Party";
  logTab.innerText = "Log";
  partyTab.textSize = 18;
  logTab.textSize = 18;

  mainTab1.container = mainContainer;
  mainTab2.container = mainContainer;
  mainTab3.container = mainContainer;
  mainTab4.container = mainContainer;
  mainTab5.container = mainContainer;

  partyTab.container = partyContainer;
  logTab.container = partyContainer;

  mainContainer.tabs.push(mainTab1);
  mainContainer.tabs.push(mainTab2);
  mainContainer.tabs.push(mainTab3);
  mainContainer.tabs.push(mainTab4);
  mainContainer.tabs.push(mainTab5);
  mainContainer.activeTab = mainContainer.tabs[0];

  partyContainer.tabs.push(partyTab);
  partyContainer.tabs.push(logTab);
  partyContainer.activeTab = partyContainer.tabs[0];


  //Setup UI elements


  //Unit and Player Creation
  //firstUnit = new Unit("Dany");
  //secondUnit = new Unit("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
  player = new Player("Unnamed");

  //Party Creation
  party1 = new Party(player);
  //party1 = new Party(player, firstUnit, secondUnit);
  partyContainer.party = party1;

  //Setup Map and Areas
  mapGlobal = new Map(mapGlobalImg, width-mapW-borderPadding, borderPadding, mapW, mapH, bgCol, borderPadding);
  setupAreas(mapGlobal);

  SetupScenes();
}

function draw() {
  //mouseOver() must be called first.
  mouseOver();

  loadScene(tutorialScene);

  currentScene.display();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);

  //Map Resize
  mapW = width/3;
  mapH = height/2;
  mapGlobal.reSize(width-mapW-borderPadding, borderPadding, mapW, mapH);

  //Container Resize
  mainContainer.reSize(borderPadding, borderPadding, width-mapW-(borderPadding*3), height-(borderPadding*2));
  partyContainer.reSize(width-mapW-borderPadding, mapH+(borderPadding*2), mapW, height-mapH-(borderPadding*3));

  //Tabs Resize
  mainTab1.reSize(mainContainer.x+1, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab2.reSize(mainContainer.x+mainContainer.w/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab3.reSize(mainContainer.x+mainContainer.w*2/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab4.reSize(mainContainer.x+mainContainer.w*3/5, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);
  mainTab5.reSize(mainContainer.x+mainContainer.w*4/5-2, mainContainer.y+1, mainContainer.w/5, mainContainer.h/20);

  partyTab.reSize(partyContainer.x+1, partyContainer.y+1, partyContainer.w/2, partyContainer.h/20);
  logTab.reSize(partyContainer.x+partyContainer.w/2-2, partyContainer.y+1, partyContainer.w/2, partyContainer.h/20);

  //Button Resize
  
  //TextBox Resize
  mainTextBox.reSize(mainTab1.getX()+20, mainContainer.y  + mainTab1.getH() + 20, mainTab1.getW()*5 -43, mainContainer.h/2);
  mainOptionTextBox.reSize(mainTab1.getX(), mainTextBox.getY() + mainTextBox.getH() + 10, mainTab1.getW()*5 -3, mainContainer.h - (mainTextBox.getY() + mainTextBox.getH() + 4));
}

function mousePressed() {

  currentScene.onClick();

  //Map Code, Insert State Wrapper Here too maybe
  if (mapGlobal!=null) {
    if (butOnClick(area1.icon)) {
      //do something
      console.log("Changing Map.");
      mapGlobal = new Map(mapGlobalSneakImg, width-mapW-borderPadding, borderPadding, mapW, mapH, bgCol, borderPadding);
      mapGlobal.scaleMode = true;
    }

    if (overMap(mapGlobal)) {
      mapGlobal.pastMouseX = mouseX;
      mapGlobal.pastMouseY = mouseY;
    }
  }

  return false;
}

function mouseDragged() {
  if (overMap(mapGlobal)) {
    mapGlobal.update()
  }
}

//Checks to determine if object is moused over.
function mouseOver() {
  cursor(ARROW);

  if (currentScene != null) {
    currentScene.mouseOver();
  }

  mapOnHover(mapGlobal);
}

function setupAreas(map) {
  area1 = new Area("testing123", 200, 150, 20);
  area2 = new Town("wowlmao", 100, 100, 20);
  area3 = new Dungeon("ohnoaspookyghost", 200, 200, 20);

  map.areas.push(area1);
  map.areas.push(area2);
  map.areas.push(area3);
  map.areas.push(new Area("testing123", 480, 163, 20));
}
