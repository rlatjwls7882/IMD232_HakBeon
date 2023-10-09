class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 25;
  }

  applyForce(force) {
    let forceDivedMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedMass);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse(0, 0, 2 * this.rad);
    fill(0);
    noStroke();
    beginShape();
    vertex(this.rad, 0);
    vertex(
      this.rad * cos((TAU / 360) * 130),
      this.rad * sin((TAU / 360) * 130)
    );
    vertex(0, 0);
    vertex(
      this.rad * cos((TAU / 360) * -130),
      this.rad * sin((TAU / 360) * -130)
    );
    endShape(CLOSE);
    pop();
  }

  displayVectors() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke('#ff0000');
    strokeWeight(1);
    line(0, 0, this.vel.x * 10, this.vel.y * 10);
    pop();
  }
}
