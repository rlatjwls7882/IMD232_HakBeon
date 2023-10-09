class Oscillator {
  constructor(velX, velY, ampX, ampY) {
    this.angle = createVector();
    this.angleVelocity = createVector(velX, velY);
    this.amplitude = createVector(ampX, ampY);
  }

  update() {
    this.angle.add(this.angleVelocity);
  }

  display() {
    const x = sin(this.angle.x) * this.amplitude.x;
    const y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(x, y, 32);
    pop();
  }

  displaySeparate() {
    const x = sin(this.angle.x) * this.amplitude.x;
    const y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke('#0000ff');
    line(x, -height / 2, x, -height / 2 + 50);
    stroke('#ff0000');
    line(-width / 2, y, -width / 2 + 50, y);
    pop();
  }
}
