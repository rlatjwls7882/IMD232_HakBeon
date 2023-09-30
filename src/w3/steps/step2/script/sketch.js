function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
}

function draw() {
  background('orange');
  fill(0);
  if (mouseX > (width * 2) / 3) {
    if (mouseY > height / 2) {
      rect((width * 2) / 3, height / 2, width / 3, height / 2);
    } else {
      rect((width * 2) / 3, 0, width / 3, height / 2);
    }
  } else if (mouseX > width / 3) {
    if (mouseY > height / 2) {
      rect(width / 3, height / 2, width / 3, height / 2);
    } else {
      rect(width / 3, 0, width / 3, height / 2);
    }
  } else {
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 3, height / 2);
    } else {
      rect(0, 0, width / 3, height / 2);
    }
  }
}
