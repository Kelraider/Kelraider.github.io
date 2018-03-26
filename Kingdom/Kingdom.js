var firstButton;
var secondButton;
var firstTextBox;

function setup() {
  //TODO Auto Re-size
  createCanvas(window.innerWidth, window.innerHeight);
  background(100, 100, 100);

  setupTextBoxes();
  setupButtons();
  secondButton.pos = createVector(firstButton.pos.x+firstButton.sizeW+30, firstButton.pos.y);
  firstTextBox.sizeW = firstButton.sizeW + secondButton.sizeW + 30;
}

function draw() {
  background(100, 100, 100);
  mouseOver();

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
  return false;
}

function mouseOver() {
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
