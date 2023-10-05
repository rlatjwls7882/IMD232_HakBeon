let angle = 0;
let rotateVel = 0;
let rotateAcc;
const lineLength = 100;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  rotateAcc = (TAU / 360) * 0.01;
}

function draw() {
  background(255);

  // rotateVel 속도로 회전
  rotateVel += rotateAcc;
  rotateVel = constrain(rotateVel, -5, 5);
  angle += rotateVel;

  translate(width / 2, height / 2);
  rotate(angle);

  // 선
  fill(127);
  stroke(0);

  strokeWeight(1);
  line(-lineLength / 2, 0, lineLength / 2, 0);

  // 원
  strokeWeight(2);
  circle(lineLength / 2, 0, 16);
  circle(-lineLength / 2, 0, 16);
}
