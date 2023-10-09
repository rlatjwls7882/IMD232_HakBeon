let rad;
let angle;
let angleVel;
let vel = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  rad = height * 0.4;
  angle = 0;
  angleVel = (TAU / 360) * vel;
}

function draw() {
  background(255);

  translate(width / 2, height / 2);

  let x = rad * cos(angle);
  let y = rad * sin(angle);

  fill(127);
  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  circle(x, y, 48);

  angle += angleVel;
}
