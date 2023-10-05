let movers = [];
let attractor;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let ballNum = 0; ballNum < 10; ballNum++) {
    movers[ballNum] = new Mover(random(width), random(height), random(0.5, 3));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);

  for (let ballNum = 0; ballNum < movers.length; ballNum++) {
    let force = attractor.attract(movers[ballNum]);
    movers[ballNum].applyForce(force);
    movers[ballNum].update();
    movers[ballNum].display();
  }

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
