class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(19, 20), 0);
    this.vel.rotate((TAU / 360) * random(0, 360));
    this.acc = createVector(0, 0);
    this.rad = 10;
    this.mass = 10;
    this.lifeSpan = 60;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(friction);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan--;
  }

  display() {
    stroke(0, this.lifeSpan * 3);
    fill(125, this.lifeSpan * 3);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return (
      this.lifeSpan < 0 ||
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    );
  }
}
