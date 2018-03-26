var bug;
var bug2;
var bug3;
var bug4;
var bug5;
var bug6;

var bgCol;
var cirCol;
var cirStroke;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
  bgCol = color(random(0,245),random(0,245),random(0,245));
  cirCol = color(red(bgCol)+10,green(bgCol)+10,blue(bgCol)+10)
  cirStroke = color(red(bgCol)+5,green(bgCol)+5,blue(bgCol)+5)
  //Create "bugs"
  bug = new Jitter;
  bug2 = new Jitter;
  bug3 = new Jitter;
  bug4 = new Jitter;
  bug5 = new Jitter;
  bug6 = new Jitter;
}

function draw() {
  background(bgCol);
  fill(cirCol);
  stroke(cirStroke);
  ellipse(width/2, height/2, height, height);
  bug.move();
  bug.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();
  bug5.move();
  bug5.display();
  bug6.move();
  bug6.display();
}
