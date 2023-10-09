class Spring {
  constructor(x, y, length, lengthMin, lengthMax, k) {
    this.anchor = createVector(x, y);
    this.restLength = length;
    this.lengthMin = lengthMin;
    this.lengthMax = lengthMax;
    this.k = k;
  }

  connect(bob) {
    let force = p5.Vector.sub(bob.pos, this.anchor);
    let currentLength = force.mag();
    let stretch = currentLength - this.restLength;
    force.setMag(-1 * this.k * stretch);
    bob.applyForce(force);
  }

  constrainLength(bob) {
    let direction = p5.Vector.sub(bob.pos, this.anchor);
    let length = direction.mag();
    if (length < this.minlen) {
      direction.setMag(this.minlen);
      bob.pos = p5.Vector.add(this.anchor, direction);
      bob.vel.mult(0);
    } else if (length > this.maxlen) {
      direction.setMag(this.maxlen);
      bob.pos = p5.Vector.add(this.anchor, direction);
      bob.vel.mult(0);
    }
  }

  display() {
    fill(127);
    circle(this.anchor.x, this.anchor.y, 10);
  }

  displayLine(bob) {
    stroke(0);
    line(bob.pos.x, bob.pos.y, this.anchor.x, this.anchor.y);
  }
}
