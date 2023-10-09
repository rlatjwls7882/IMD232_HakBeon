let angle = 0;
let angleVel;
const amplitude = 200;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  angleVel = (TAU / 360) * 1.5;
}

function draw() {
  background(255);
  angle += angleVel;
  const x = amplitude * sin(angle);

  stroke(0);
  strokeWeight(2);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  circle(x, 0, 48);
}
