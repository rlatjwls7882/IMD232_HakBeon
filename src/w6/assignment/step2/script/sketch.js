let emitter;
let gravity = 0;
let friction = 0.9;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  gravity = createVector(0, 0.1);
  emitter = new Emitter();
  background(255);
}

function draw() {
  background(255);
  console.log(emitter.particles.length);
  emitter.update(gravity);
  emitter.display();
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    emitter.particles.push(new Particle(mouseX, mouseY));
  }
}
