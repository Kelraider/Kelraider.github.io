var bug;
var bug2;
var bug3;
var bug4;
var bug5;
var bug6;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // Create object
  bug = new Jitter;
  bug2 = new Jitter;
  bug3 = new Jitter;
  bug4 = new Jitter;
  bug5 = new Jitter;
  bug6 = new Jitter;
}

function draw() {
  background(16, 177, 218);
  fill(26,187,228);
  stroke(21,182,223);
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
