let angle = 0;
let angularVel = 0;
let angularAcc;
const propellerLen = 100;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  angularAcc = (TAU / 360) * 0.01;
}

function draw() {
  background(255);

  angularVel += angularAcc;
  angularVel = constrain(angularVel, -5, 5);
  angle += angularVel;

  translate(width / 2, height / 2);
  rotate(angle);

  stroke(0);
  strokeWeight(1);
  fill(127);
  line(-propellerLen / 2, 0, propellerLen / 2, 0);

  strokeWeight(2);
  fill(127);
  circle(propellerLen / 2, 0, 16);
  circle(-propellerLen / 2, 0, 16);
}
