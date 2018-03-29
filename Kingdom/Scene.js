//Scenes
var tutorialScene;

//TextBoxes
var firstTextBox;

//Buttons
var firstButton;
var secondButton;

function Scene(){
  this.setUp;
  this.display;
  this.isLoaded = false;
  
  this.map;
}

Scene.prototype.isScene = true;

function SetupScenes(){
  tutorialScene = new Scene();
  tutorialScene.setUp = tutorialSceneSetup;
  tutorialScene.mouseOver = tutorialSceneMouseOver;
  tutorialScene.display = tutorialSceneDisplay;
}

function tutorialSceneSetup(){
  //var Whatever here
  console.log(this.isLoaded);
  if(!this.isLoaded){
    
    //Scene Setup
    tutorialSceneSetupTextBoxes();
    tutorialSceneSetupButtons();
    firstTextBox.sizeW = firstButton.sizeW + secondButton.sizeW + 30;
    
    this.isLoaded = true;
    console.log(this.isLoaded);
  } else {
    console.warn("Scene was attempted to be setup while already loaded.");
  }
}

function tutorialSceneMouseOver(){
  butOnHover(firstButton);
  butOnHover(secondButton);
  //Add butOnHover(button) here to add hover effect.
  
}

function tutorialSceneDisplay(){
  
  //Draw Three Main Screens
    //Map Display
  mapGlobal.display();
    //Container Display
  mainContainer.display();
    //Party Display
  partyContainer.display();
  
}

function tutorialSceneSetupTextBoxes() {
  firstTextBox = new TextBox(200, 100, 250, 80);
  firstTextBox.setText("Are you ready to begin your super epic adventure?");
  
  mainContainer.tabs[0].add(firstTextBox);
}

function tutorialSceneSetupButtons() {
  
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

//General Scene Specific Functions

function loadScene(scene){
  if(!scene.isLoaded){
    scene.setUp();
    currentScene = scene;
  }
}

function clearScene(scene){
  
}
