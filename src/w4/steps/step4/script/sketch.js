let moverA;
let moverB;
let wind;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  moverB = new Mover((width * 2) / 3, height / 2 + (10 * sqrt(10) - 10), 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) moverA.applyForce(wind);

  if (moverA.contactEdge()) {
    let c = 0.01;
    let friction = moverA.vel.copy().mult(-c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  if (moverB.contactEdge()) {
    let c = 0.1;
    let friction = moverB.vel.copy().mult(-c);
    moverB.applyForce(friction);
  }
  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) moverB.applyForce(wind);

  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
