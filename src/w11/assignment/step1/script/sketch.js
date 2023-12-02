let obj = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  let objNum = random(3, 10);
  for (let objIdx = 0; objIdx < objNum; objIdx++) {
    obj.push(new Obj(random(width), random(height)));
  }
  background('white');
}

function draw() {
  background('white');

  for (let objIdx = 0; objIdx < obj.length; objIdx++) {
    obj[objIdx].applyForce(p5.Vector.random2D().mult(0.1));
    obj[objIdx].update();
    obj[objIdx].infiniteEdge();
    obj[objIdx].display();

    if (obj[objIdx].isDead()) {
      obj.splice(objIdx, 1);
      obj.push(new Obj(random(width), random(height)));
    }
  }
}