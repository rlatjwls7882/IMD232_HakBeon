class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = 1;
    this.nextState = this.state;
    this.neighbors = [];
  }

  calcNextState() {
    let enemyState;
    if (this.state == 3) {
      enemyState = 1;
    } else {
      enemyState = this.state + 1;
    }

    const enemies = this.neighbors.filter(
      (eachNeighbor) => eachNeighbor?.state == enemyState
    );

    if (enemies.length > 2) {
      this.nextState = enemyState;
    } else {
      this.nextState = this.state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.state == 1 ? 255 : this.state == 2 ? 128 : 0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
