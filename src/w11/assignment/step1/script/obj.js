class Obj {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector();
    this.mass = 1;
    this.path = [];
    this.objSon = [];
    this.length = random(1, 5);
    this.life = random(255, 500);
    for (let sonIdx = 0; sonIdx < this.length; sonIdx++) {
      this.objSon.push(new ObjSon(this.pos.x, this.pos.y));
    }
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.life--;
    this.path.push([this.pos.x, this.pos.y]);

    for (let sonIdx = 0; sonIdx < this.length; sonIdx++) {
      const pos = this.path.length - (sonIdx + 1) * 10;
      if (pos > 0) {
        this.objSon[sonIdx].pos.x = this.path[pos][0];
        this.objSon[sonIdx].pos.y = this.path[pos][1];
      } else {
        this.objSon[sonIdx].pos.x = this.path[0][0];
        this.objSon[sonIdx].pos.y = this.path[0][1];
      }
    }
  }

  update_trace() {
    // noFill();
    // beginShape();
    // for (let pathIdx = 0; pathIdx < this.path.length; pathIdx++) {
    //   vertex(this.path[pathIdx][0], this.path[pathIdx][1]);
    // }
    // endShape();
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
    stroke(0, this.life);
    fill(127, this.life);
    ellipse(this.pos.x, this.pos.y, width / 35);

    for (let sonIdx = 0; sonIdx < this.length; sonIdx++) {
      ellipse(this.objSon[sonIdx].pos.x, this.objSon[sonIdx].pos.y, width / 35);
    }
  }

  isDead() {
    return this.life < 0;
  }

  // 아직 구현 안함(클릭)
  mouseMoved(mX, mY) {
    this.isHover =
      (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.angleAcc = 0;
      this.angleVel = 0;
      this.draggingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      const ballShouldBe = createVector(
        mX - this.draggingOffset.x,
        mY - this.draggingOffset.y
      );
      const angle = atan2(
        ballShouldBe.y - this.pos.y,
        ballShouldBe.x - this.pos.x
      );
      this.angle = angle;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
