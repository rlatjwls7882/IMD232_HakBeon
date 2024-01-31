class Obj {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector();
    this.path = [];
    this.tail = [];
    this.length = random(0, 7);
    this.life = random(255, 500);
    for (let tailIdx = 0; tailIdx < this.length; tailIdx++) {
      this.tail.push([this.pos.x, this.pos.y]);
    }

    this.rad = width / 60;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.life--;
    this.path.push([this.pos.x, this.pos.y]);

    for (let tailIdx = 0; tailIdx < this.length; tailIdx++) {
      const pos = this.path.length - (tailIdx + 1) * 10;
      if (pos > 0) {
        this.tail[tailIdx][0] = this.path[pos][0];
        this.tail[tailIdx][1] = this.path[pos][1];
      } else {
        this.tail[tailIdx][0] = this.path[0][0];
        this.tail[tailIdx][1] = this.path[0][1];
      }
    }
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }

  display() {
    noStroke();
    fill(127, this.life);
    ellipse(this.pos.x, this.pos.y, this.rad);

    for (let tailIdx = 0; tailIdx < this.length; tailIdx++) {
      ellipse(this.tail[tailIdx][0], this.tail[tailIdx][1], this.rad);
    }
  }

  isDead() {
    return this.life < 0;
  }
}
