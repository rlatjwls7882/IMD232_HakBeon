function setup() {
  let canvas = createCanvas(400, 300);
  let canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
}
