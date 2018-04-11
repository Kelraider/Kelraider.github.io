//Scenes
var tutorialScene;

//TextBoxes
var mainTextBox;
var mainOptionTextBox;
var optionChanged = false;

//Buttons
var firstButton;
var secondButton;

function Scene() {
  this.setUp;
  this.display;
  this.mouseOver;
  this.onClick;
  this.isLoaded = false;

  this.map;
}

Scene.prototype.isScene = true;

//General Scene Specific Functions

function loadScene(scene) {
  if (!scene.isLoaded) {
    scene.setUp();
    currentScene = scene;
  }
}

function clearScene(scene) {
}

function SetupScenes() {
  tutorialScene = new Scene();
  tutorialScene.setUp = tutorialSceneSetup;
  tutorialScene.mouseOver = tutorialSceneMouseOver;
  tutorialScene.onClick = tutorialSceneOnClick;
  tutorialScene.display = tutorialSceneDisplay;
}














///SCENE DATA





//TUTORIAL SCENE

function tutorialSceneSetup() {
  //var Whatever here
  if (!this.isLoaded) {

    //Scene Setup
    tutorialSceneSetupTextBoxes();
    tutorialSceneSetupButtons();

    //mainTextBox.sizeW = firstButton.sizeW + secondButton.sizeW + 30;

    this.isLoaded = true;
  } else {
    console.warn("Scene was attempted to be setup while already loaded.");
  }
}

function tutorialSceneMouseOver() {
  //Buttons
  butOnHover(firstButton);
  butOnHover(secondButton);

  //Tabs
  butOnHover(mainTab1);
  butOnHover(mainTab2);
  butOnHover(mainTab3);
  butOnHover(mainTab4);
  butOnHover(mainTab5);

  butOnHover(partyTab);
  butOnHover(logTab);

  //Add butOnHover(button) here to add hover effect.
}

function tutorialSceneOnClick() {

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
  switch(mainOptionTextBox.currentOptionsState) {
  case 0:
    if (butOnClick(firstButton)) {
      //do something
      mainOptionTextBox.setState(1);
      mainTextBox.append("As another day comes to a close, the residents of Hythe close up their shops. Some will hastily make their way to the local tavern, eager to be merry with friends, others return home to the smiling faces of their families. You looked forward to that once, but none of they matters now. You recently became a permanent resident of the Slums.",2);
    }
    break;
  case 1:
    if (butOnClick(firstButton)) {
      //do something
      mainOptionTextBox.setState(2);
      mainTextBox.append("The small town of Hythe once promised you a future. In another life you might have had a wife, kids, a house to call your own, a proud banner for your line. If not that, maybe you could have joined this continents guild, the Titans. At best, a life of glory, at worst, a cause to die for. Even that seems unlikely now, not the dying part, just your life having had any real meaning.",2);
    }
    break;
  case 2:
    if (butOnClick(firstButton)) {
      //do something
      mainOptionTextBox.setState(3);
      mainTextBox.append("You might think I'm being harsh, but the Slums are a place to die. The few run-down huts the guards purposefully don't check are inhabited by pickpockets and beggars the town has simply abandoned.",2);
    }
    break;
  case 3:
    if (butOnClick(firstButton)) {
      //do something
      firstButton.setText("Sorry that's all for now");
      mainOptionTextBox.setState(4);
      
    }
    break;
  case 4:
    if (butOnClick(firstButton)) {
      //do something
      mainOptionTextBox.setState(5);
    }
    break;
  case 5:
    if (butOnClick(secondButton)) {
      //do something
      mainOptionTextBox.setState(4);
    }
    break;
  }
}

function tutorialSceneDisplay() {

  optionChanged = false;

  //Draw Three Main Screens
  //Map Display
  mapGlobal.display();
  //Container Display
  mainContainer.display();
  //Party Display
  partyContainer.display();
}

function tutorialSceneSetupTextBoxes() {
  mainTextBox = new MainTextBox(mainTab1.getX()+20, mainContainer.y  + mainTab1.getH() + 20, mainTab1.getW()*5 -43, mainContainer.h/2);
  mainOptionTextBox = new OptionTextBox(mainTab1.getX(), mainTextBox.getY() + mainTextBox.getH() + 10, mainTab1.getW()*5 -3, mainContainer.h - (mainTextBox.getY() + mainTextBox.getH() + 4));

  mainTextBox.setText(

    "You are a child."
    );


  mainOptionTextBox.normalColor = color(33);
  mainOptionTextBox.normalStroke = mainOptionTextBox.normalColor;

  mainContainer.tabs[0].add(mainTextBox);
  mainContainer.tabs[0].add(mainOptionTextBox);
}

function tutorialSceneSetupButtons() {

  //MainContainer Buttons
  firstButton = new Button(0, 0, 0, 30);

  secondButton = new Button(0, 0, 0, 30);
  secondButton.pos = createVector(firstButton.pos.x+firstButton.sizeW+30, firstButton.pos.y);
  secondButton.setText("Seriously, there's nothing else, i'll repeat myself:");

  firstButton.setText("...");
  mainOptionTextBox.addState([firstButton]);
  mainOptionTextBox.addState([firstButton]);
  mainOptionTextBox.addState([firstButton]);
  mainOptionTextBox.addState([firstButton]);
  mainOptionTextBox.addState([firstButton]);
  mainOptionTextBox.addState([secondButton]);

  mainOptionTextBox.setState(0);

  //PartyContainer Buttons
}




//NEXT SCENE
