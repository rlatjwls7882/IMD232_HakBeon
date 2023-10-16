let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  emitters.push(new Emitter(width / 2, 20));
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background(255);
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
