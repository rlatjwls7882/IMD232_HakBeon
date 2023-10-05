let movers = [];
let liquid;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  reset();
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  liquid.display();
  for (let ballNum = 0; ballNum < movers.length; ballNum++) {
    if (liquid.contains(movers[ballNum])) {
      let dragForce = liquid.calculateDrag(movers[ballNum]);
      movers[ballNum].applyForce(dragForce);
    }

    movers[ballNum].applyForce(createVector(0, 0.1 * movers[ballNum].mass)); // 중력
    movers[ballNum].update();
    movers[ballNum].bounceEdges();
    movers[ballNum].display();
  }
}

// 마우스 클릭
function mousePressed() {
  if (isMouseInsideCanvas()) reset();
}

// 재시작
function reset() {
  for (let i = 0; i < 9; i++)
    movers[i] = new Mover((width / 10) * (i + 1), 0, random(0.5, 3));
}
