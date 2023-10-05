class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  // 액체 속에 있는지 확인
  contains(mover) {
    let pos = mover.pos;
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    );
  }

  // 액체 속 속도 제어
  calculateDrag(mover) {
    let speed = mover.vel.mag();
    let dragMagnitude = this.c * speed ** 2;
    let dragForce = mover.vel.copy().mult(-1);
    dragForce.setMag(dragMagnitude);
    return dragForce;
  }

  // 액체 생성
  display() {
    noStroke();
    fill(200);
    rect(this.x, this.y, this.w, this.h);
  }
}
