class Boid {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.acc = createVector(0, 0);
    this.vel = p5.Vector.random2D();
    this.pos = createVector(x, y);
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.sepFactor = 1.5;
    this.aliFactor = 1.0;
    this.cohFactor = 1.0;
    this.separationDist = 10;
    this.neighborDist = 50;
  }

  run(boids) {
    this.flock(boids);
    this.update();
    this.borderInfinite();
    this.display();
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    const angle = this.vel.heading();
    fill(127);
    stroke(0);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    beginShape();
    vertex(this.rad * 2, 0);
    vertex(-this.rad * 2, -this.rad);
    vertex(-this.rad * 2, this.rad);
    endShape(CLOSE);
    pop();
  }

  flock(boids) {
    let sep = this.separate(boids);
    let ali = this.align(boids);
    let coh = this.cohere(boids);
    sep.mult(this.sepFactor);
    ali.mult(this.aliFactor);
    coh.mult(this.cohFactor);
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  seek(target) {
    const steer = p5.Vector.sub(target, this.pos);
    steer.setMag(this.speedMx);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    return steer;
  }

  // 충돌한 물체 튕기기
  separate(boids) {
    const steer = createVector(0, 0);
    let count = 0;
    boids.forEach((each) => {
      if (this !== each) {
        const desiredDist = this.separationDist + (this.rad + each.rad);
        let dist = p5.Vector.dist(this.pos, each.pos);
        if (dist > 0 && dist < desiredDist) {
          let diff = p5.Vector.sub(this.pos, each.pos);
          diff.setMag(1 / dist);
          steer.add(diff);
          count++;
        }
      }
    });
    if (count > 0) {
      steer.div(count);
    }
    if (steer.mag() > 0) {
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  //
  align(boids) {
    const steer = createVector(0, 0);
    let count = 0;
    boids.forEach((each) => {
      if (this !== each) {
        let dist = p5.Vector.dist(this.pos, each.pos);
        if (dist > 0 && dist < this.neighborDist) {
          steer.add(each.vel);
          count++;
        }
      }
    });
    if (count > 0) {
      steer.div(count);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    } else {
      steer.mult(0);
    }
    return steer;
  }

  //
  cohere(boids) {
    const steer = createVector(0, 0);
    let count = 0;
    boids.forEach((each) => {
      if (this !== each) {
        let dist = p5.Vector.dist(this.pos, each.pos);
        if (dist > 0 && dist < this.neighborDist) {
          steer.add(each.pos);
          count++;
        }
      }
    });
    if (count > 0) {
      steer.div(count);
    } else {
      steer.mult(0);
    }
    return this.seek(steer);
  }

  borderInfinite() {
    if (this.pos.x < -this.rad) {
      this.pos.x = width + this.rad;
    } else if (this.pos.x > width + this.rad) {
      this.pos.x = -this.rad;
    }
    if (this.pos.y < -this.rad) {
      this.pos.y = height + this.rad;
    } else if (this.pos.y > height + this.rad) {
      this.pos.y = -this.rad;
    }
  }
}
