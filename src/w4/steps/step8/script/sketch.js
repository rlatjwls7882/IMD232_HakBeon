let bodyA;
let bodyB;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  bodyA = new Body(width / 2, height / 3);
  bodyB = new Body(width / 2, (2 * height) / 3);
  bodyA.vel = createVector(1, 0);
  bodyB.vel = createVector(-1, 0);
}

function draw() {
  background(255);

  bodyA.applyForce(bodyB.attract(bodyA));
  bodyB.applyForce(bodyA.attract(bodyB));

  bodyA.update();
  bodyB.update();

  bodyA.display();
  bodyB.display();
}
