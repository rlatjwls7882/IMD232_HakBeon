let obj = [];
let isPressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let objNum = random(3, 8);

  for (let objIdx = 0; objIdx < objNum; objIdx++) {
    obj.push(new Obj(random(width), random(height)));
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background('skyblue');

  if (!isPressed) {
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
  } else {
    for (let objIdx = 0; objIdx < obj.length; objIdx++) {
      obj[objIdx].display();
    }
  }

  fill('white');
  noStroke();
  let size = width / 16;
  let engSmallSize = width / 70;
  let koSmallSize = width / 75;

  if (
    0 < mouseX &&
    mouseX < size * 35 &&
    0 < mouseY &&
    mouseY < size + engSmallSize * 6 + 30
  ) {
    textSize(size);
    text('블루필드 내시 현상', 0, 10, width, size + 10);
    textSize(koSmallSize);
    text(
      '블루필드 내시 현상은 특히 하늘과 같은 밝은 청색광을 볼 때 시야의 물결 모양 경로를 따라 빠르게 움직이는 작고 밝은 점(푸른 하늘 스프라이트)이 나타나는 엔옵틱 현상이다. 점들은 수명이 짧고, 약 1초 이하 동안 눈에 보이며, 무작위로 보이는 기복이 있는 경로를 따라 짧은 거리를 이동한다. 그들 중 일부는 이전의 다른 점들과 동일한 경로를 따르는 것처럼 보인다. 점들은 작은 벌레처럼 길을 따라 길게 나타날 수 있으며, 점의 이동 속도는 심장 박동과 동시에 변화하는 것으로 보인다. 이 현상을 보고 안구 옆 부분을 안쪽으로 가볍게 누르면 점들이 더 이상 움직이지 않고 심장이 뛰는 경우에만 움직인다. 블루필드 내시 현상은 유리체 혼탁 등 다른 비문증과 달리 그 자체로는 질병과 관계 없는 매우 정상적인 신체 활동의 신호이다.',
      0,
      size + 10,
      width,
      height
    );
  } else {
    textSize(size);
    text('Blue Field Entoptic Phenomenon', 0, 10, size * 35, size + 10);
    textSize(engSmallSize);
    text(
      'The blue field entoptic phenomenon is an enoptic phenomenon in which small, bright dots (blue sky Sprites) that move quickly along the wavy path of vision, especially when looking at bright blue light, such as the sky. The dots have a short lifespan, are visible for less than about one second, and travel short distances along randomly appearing undulating paths. Some of them seem to follow the same path as other dots did before. The dots can appear long along the path like a small bug, and the speed of movement of the dots seems to change at the same time as the heartbeat. When you see this phenomenon and press the side of the eyeball lightly inward, the dots no longer move, only if the heart beats.Bluefield esophagus is a sign of very normal physical activity that is not related to a disease in itself, unlike other symptoms such as vitreous opacity.',
      0,
      size + 10,
      width,
      height
    );
  }
}

function mousePressed() {
  isPressed = true;
}

function mouseReleased() {
  isPressed = false;
}
