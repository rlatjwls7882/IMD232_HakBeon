let mover;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 2, height / 2, 20);
  gravity = createVector(0, 0.1).mult(mover.mass);
}

function draw() {
  background(255);

  let mVec = createVector(mouseX, mouseY);
  let pMVec = createVector(pmouseX, pmouseY);
  let dragForce = p5.Vector.sub(mVec, pMVec);

  let dragMag = dragForce.mag();
  dragForce.normalize().mult(dragMag * 0.5);

  if (mover.contactEdge()) {
    let c = 0.5;
    let friction = mover.vel.copy().mult(-c);
    mover.applyForce(friction);
  }

  if (mover.moverUpdate) mover.applyForce(gravity);
  else mover.applyForce(dragForce);

  mover.checkEdges();
  mover.display();
  mover.update();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  mover.handleHover(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  mover.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  mover.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  mover.stopDragging();
}
