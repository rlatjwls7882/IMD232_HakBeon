let mover;
let mVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 25);
  mVec = createVector();

  background('white');
}

function draw() {
  mVec.set(mouseX, mouseY);
  let towardMouseVec = p5.Vector.sub(mVec, mover.pos);
  towardMouseVec.setMag(0.1);
  if (mouseIsPressed) {
    towardMouseVec.mult(-1);
  }
  mover.setAcc(towardMouseVec);
  mover.update();

  background('white');
  mover.display();
  mover.displayVectors();

  stroke(0);
  strokeWeight(1);
  line(mover.pos.x, mover.pos.y, mouseX, mouseY);
}
