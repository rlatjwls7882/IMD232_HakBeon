const movers = [];
let mouseVector;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  for (let i = 0; i < 20; i++)
    movers.push(new Mover(random(width), random(height), 1));

  mouseVector = createVector();
}

function draw() {
  background(255);
  mouseVector.set(mouseX, mouseY);
  movers.forEach((eachMover) => {
    const dirForce = p5.Vector.sub(mouseVector, eachMover.pos);
    dirForce.setMag(0.05);
    eachMover.applyForce(dirForce);
    eachMover.update();
    eachMover.display();
    eachMover.displayVectors();
  });
}
