class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass ** (1 / 2) * 8;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.velView = createVector(0, 0);
    this.accView = createVector(0, 0);
  }

  // 받는 힘
  applyForce(force) {
    let acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  // 속도와 가속도 업데이트
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.velView.set(this.vel);
    this.velView.mult(10);

    this.accView.set(this.acc);
    this.accView.mult(100);

    this.acc.mult(0);
  }

  // 공 생성
  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);

    noFill();
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.velView.x,
      this.pos.y + this.velView.y
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accView.x,
      this.pos.y + this.accView.y
    );
  }

  // 벽 튕기기
  bounceEdges() {
    let bounce = -0.5;
    if (this.pos.x > width - 1 - this.radius) {
      this.pos.x = width - 1 - this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y = height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }
}
