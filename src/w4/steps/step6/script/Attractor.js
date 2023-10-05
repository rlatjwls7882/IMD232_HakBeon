class Attractor {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.mass = 20;
    this.radius = 30;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.hover = false;
  }

  // 원자핵의 중력 계산
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (G * this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  // 원자핵 생성
  display() {
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.hover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }

  // 마우스가 원자핵 안에 있는지 확인
  handleHover(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.radius) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }

  // 원자핵 클릭 감지
  handlePress(mx, my) {
    if (!this.hover) return;
    this.dragging = true;
    this.dragOffset.x = this.pos.x - mx;
    this.dragOffset.y = this.pos.y - my;
  }

  // 드래깅 종료
  stopDragging() {
    this.dragging = false;
  }

  // 원자핵 이동
  handleDrag(mx, my) {
    if (this.dragging) {
      this.pos.x = mx + this.dragOffset.x;
      this.pos.y = my + this.dragOffset.y;
    }
  }
}
