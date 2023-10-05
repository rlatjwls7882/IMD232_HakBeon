let bodies = [];

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  for (let i = 0; i < 10; i++)
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
}

function draw() {
  background(255);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++)
      if (i !== j) bodies[j].applyForce(bodies[i].attract(bodies[j]));

    bodies[i].update();
    bodies[i].display();
  }
}
