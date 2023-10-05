let mover;
let attractor;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
}

function draw() {
  background(255);

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();

  mover.display();
  attractor.display();
}

// 마우스의 위치 감지
function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleHover(mouseX, mouseY);
}

// 클릭 감지
function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  attractor.handlePress(mouseX, mouseY);
}

// 드래그 감지
function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleDrag(mouseX, mouseY);
}

// 드래그 종료
function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  attractor.stopDragging();
}
