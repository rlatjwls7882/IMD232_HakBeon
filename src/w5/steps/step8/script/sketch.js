let angle = 0;
const angleVel = 0.2;
const amplitude = 100;
const rad = 25;
const gap = rad * 2;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  stroke(0);
  strokeWeight(2);
  fill(127, 127);

  for (let x = 0; x <= width; x += gap) {
    let y = amplitude * sin(angle);
    circle(x, y + height / 2, 2 * rad);
    angle += angleVel;
  }
}
