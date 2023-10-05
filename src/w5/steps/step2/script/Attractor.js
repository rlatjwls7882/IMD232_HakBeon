class Attractor {
  constructor(x, y, mass, rad, distMin, distMax) {
    this.pos = createVector(x, y);
    this.mass = mass;
    this.rad = rad;
    this.distMin = distMin;
    this.distMax = distMax;
  }

  // 물체 사이의 힘 계산
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, this.distMin, this.distMax);
    let strength = (this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  // 가운데 원 출력
  display() {
    strokeWeight(4);
    stroke(0);
    fill(175, 200);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
