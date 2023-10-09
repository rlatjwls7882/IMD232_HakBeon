let bob;

let spring;

let springInitL;
let springMaxL;
let springMinL;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  springInitL = height / 2;
  springMaxL = (3 * height) / 4;
  springMinL = height / 4;
  spring = new Spring(width / 2, 10, springInitL, springMinL, springMaxL, 0.9);
  bob = new Bob(width / 2, height / 2, 50, 25);
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.5);
  gravity.mult(bob.mass);
  bob.applyForce(gravity);

  bob.update();
  bob.handleDrag(mouseX, mouseY);

  spring.connect(bob);
  spring.constrainLength(bob, springMinL, springMaxL);

  spring.displayLine(bob);
  bob.display();
  spring.display();
}

function mousePressed() {
  bob.handleClick(mouseX, mouseY);
}

function mouseReleased() {
  bob.stopDragging();
}
