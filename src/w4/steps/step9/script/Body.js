class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 8;
    this.radius = this.mass ** (1 / 2) * 4;
    this.velView = createVector(0, 0);
    this.accView = createVector(0, 0);
  }

  // 물체 사이의 중력 계산
  attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  // 힘 더하기
  applyForce(force) {
    let acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  // 위치, 속도, 가속도 업데이트
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.velView.set(this.vel);
    this.velView.mult(10);

    this.accView.set(this.acc);
    this.accView.mult(100);

    this.acc.set(0, 0);
  }

  // 원 생성
  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.pos.x, this.pos.y, this.radius * 2);

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
}
