let bodies = [];

let G = 1;

// 7. bodyNum>20
let bodyNum = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < bodyNum; i++) {
    for (let j = 0; j < bodyNum; j++)
      if (i !== j) bodies[j].applyForce(bodies[i].attract(bodies[j]));

    bodies[i].update();
    bodies[i].display();
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) reset();
}

// 5. 16<=mass<=100
function reset() {
  for (let i = 0; i < bodyNum; i++)
    bodies[i] = new Body(random(width), random(height), random(16, 100));
}
