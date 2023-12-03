let obj = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  let objNum = random(3, 8);
  for (let objIdx = 0; objIdx < objNum; objIdx++) {
    obj.push(new Obj(random(width), random(height)));
  }
  image = loadImage('script/background.png');
}

function draw() {
  background(image);
  fill('white');
  stroke(0);
  let size = 100;
  textSize(size);

  if (mouseX < size * 2 && mouseY < size + 10) {
    text('영어', 0, 10, size * 2, size + 10);
  } else {
    text('한글', 0, 10, size * 2, size + 10);
  }

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

function mouseMoved() {
  for (let objIdx = 0; objIdx < obj.length; objIdx++) {
    obj[objIdx].mouseMoved(mouseX, mouseY);
  }
}

function mousePressed() {
  for (let objIdx = 0; objIdx < obj.length; objIdx++) {
    obj[objIdx].mousePressed();
  }
}

function mouseDragged() {
  for (let objIdx = 0; objIdx < obj.length; objIdx++) {
    obj[objIdx].mouseDragged(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let objIdx = 0; objIdx < obj.length; objIdx++) {
    obj[objIdx].mouseReleased();
  }
}
