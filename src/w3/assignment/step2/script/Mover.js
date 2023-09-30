class Mover {
  constructor(x, y, rad) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.rad = rad;
  }

  createRandomAcc() {
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.1);
  }

  setAcc(acc) {
    this.acc.set(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  edgeInfinite() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x > width - 1) {
      this.pos.x += -width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (this.pos.y > height - 1) {
      this.pos.y += -height;
    }
  }

  display() {
    stroke('black');
    strokeWeight(4);
    fill('white');
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  displayVectors() {
    stroke('#f00');
    strokeWeight(4);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('#00f');
    strokeWeight(2);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
