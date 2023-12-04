class Obj {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector();
    this.mass = 1;
    this.path = [];
    this.objSon = [];
    this.length = random(0, 7);
    this.life = random(255, 500);
    for (let sonIdx = 0; sonIdx < this.length; sonIdx++) {
      this.objSon.push([this.pos.x, this.pos.y]);
    }

    this.rad = width / 60;
    this.isHover = false;
    this.isDragging = false;
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.life--;
    this.path.push([this.pos.x, this.pos.y]);

    for (let sonIdx = 0; sonIdx < this.length; sonIdx++) {
      const pos = this.path.length - (sonIdx + 1) * 10;
      if (pos > 0) {
        this.objSon[sonIdx][0] = this.path[pos][0];
        this.objSon[sonIdx][1] = this.path[pos][1];
      } else {
        this.objSon[sonIdx][0] = this.path[0][0];
        this.objSon[sonIdx][1] = this.path[0][1];
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

    for (let sonIdx = 0; sonIdx < this.length; sonIdx++) {
      ellipse(this.objSon[sonIdx][0], this.objSon[sonIdx][1], this.rad);
    }
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed() {
    if (this.isHover) {
      this.isDragging = true;
      this.vel.mult(0);
      this.acc.mult(0);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX;
      this.pos.y = mY;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }

  isDead() {
    return this.life < 0;
  }
}
