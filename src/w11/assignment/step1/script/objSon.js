class ObjSon {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  display() {
    stroke(0);
    fill(255);
    ellipse(this.pos.x, this.pos.y, width / 35);
  }
}
