let pos;
let vel = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 4, true);
  background('white');
  pos = [width / 2, height / 2];
}

function draw() {
  background('white');
  pos[0] += vel[0];
  pos[1] += vel[1];
  ellipse(pos[0], pos[1], 50);

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
