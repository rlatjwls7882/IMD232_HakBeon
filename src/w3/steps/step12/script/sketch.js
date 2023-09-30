let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
}

function update() {
  acc = p5.Vector.random2D();
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) pos.x += width;
  else if (pos.x > width) pos.x -= width;
  if (pos.y < 0) pos.y += height;
  else if (pos.y > height) pos.y -= height;
}

function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 2 * radius);
}
