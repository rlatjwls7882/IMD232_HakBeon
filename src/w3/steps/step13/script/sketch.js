let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover();
}

function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.show();
}
