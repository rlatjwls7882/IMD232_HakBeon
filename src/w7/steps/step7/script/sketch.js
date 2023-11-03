let flock;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  flock = new Flock();
  for (let i = 0; i < 120; i++) {
    let boid = new Boid(random(width), random(height), 1, 3, 3, 0.05);
    flock.addBoid(boid);
  }
}

function draw() {
  background(255);
  flock.run();
}

function mouseDragged() {
  flock.addBoid(new Boid(mouseX, mouseY, 1, 3, 3, 0.05));
}
