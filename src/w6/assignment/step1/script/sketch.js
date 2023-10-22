let emitter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  emitter = new Emitter(0, 0);
  rectMode(CENTER);
  background(255);
}

function draw() {
  emitter.addParticle();
  emitter.update();

  background(255);
  emitter.display();
}
