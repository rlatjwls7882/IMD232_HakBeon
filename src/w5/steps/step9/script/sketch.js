let angle = 0;
let angleStart = 0;
let angleStartAdd = 0;
const angleVel = 0.2;
const amplitude = 100;
const rad = 10;
const gap = rad * 2;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  background(255);

  angleStartAdd = (TAU / 360) * 3;
}

function draw() {
  background(255);

  angle = angleStart;

  stroke(0);
  strokeWeight(2);
  fill(127, 127);

  for (let x = 0; x <= width; x += gap) {
    let y = map(sin(angle), -1, 1, 0, height - 1);
    circle(x, y, 2 * rad);
    angle += angleVel;
  }

  angleStart += angleStartAdd;
}
