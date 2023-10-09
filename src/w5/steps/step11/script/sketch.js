let pendulum;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  pendulum = new Pendulum(width / 2, 0, height / 2);
}

function draw() {
  background(255);
  pendulum.update();
  pendulum.display();

  pendulum.drag();
}

function mousePressed() {
  pendulum.clicked(mouseX, mouseY);
}

function mouseReleased() {
  pendulum.stopDragging();
}
