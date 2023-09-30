let p = {
  add: function (otherVector) {
    this.x += otherVector.x;
    this.y += otherVector.y;
  },
};
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 3, 4, true);
  background('white');
  p.x = width / 2.0;
  p.y = height / 2.0;
}

function draw() {
  background('white');
  p.add(v);
  ellipse(p.x, p.y, 50);

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
