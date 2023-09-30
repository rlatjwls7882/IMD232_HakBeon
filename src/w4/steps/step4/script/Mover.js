class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = mass ** 0.5 * 10;
  }

  applyForce(force) {
    let acc = createVector(force.x, force.y);
    acc.div(this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius) return true;
    else return false;
  }

  checkEdges() {
    const bounce = -0.9;
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x = width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
      this.vel.y *= bounce;
    } else if (this.pos.y > height - 1 - this.radius) {
      this.pos.y = height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
