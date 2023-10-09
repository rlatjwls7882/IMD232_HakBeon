class Bob {
  constructor(x, y, mass, rad) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.dragOffset = createVector();
    this.dragging = false;
  }

  update() {
    this.vel.mult(0.98);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    let forceDivedMass = force.copy();
    forceDivedMass.div(this.mass);
    this.acc.add(forceDivedMass);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    if (this.dragging) {
      fill(200);
    }
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }

  handleClick(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.rad) {
      this.dragging = true;
      this.dragOffset.x = this.pos.x - mx;
      this.dragOffset.y = this.pos.y - my;
      this.vel.mult(0);
    }
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.pos.x = mx + this.dragOffset.x;
      this.pos.y = my + this.dragOffset.y;
    }
  }
}
