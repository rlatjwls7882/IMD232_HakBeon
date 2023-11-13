var {
  Engine,
  Render,
  Runner,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
} = Matter;

// 엔진 만들기
var engine = Engine.create(),
  world = engine.world;

// 러너 만들기
var runner = Runner.create();

let ropeA, ropeB, ropeC;

const A = [];
const C = [];
let W, H, isSame;

function setup() {
  setCanvasContainer('canvas', 4, 3, true);

  // 초기 크기
  W = width;
  H = height;
  isSame = W;

  for (let i = 0; i < 10; i++) {
    A[i] = random(100, 200);
    C[i] = random(200, 300);
  }

  // add bodies
  addBodies();

  // add mouse control
  let mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouse.pixelRatio = pixelDensity();
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  background('white');
  Runner.run(runner, engine);
}

const verticesA = [
  { x: 8.5 * 4, y: -4.8 * 4 },
  { x: 7.6 * 4, y: -1.6 * 4 },
  { x: 21.5 * 4, y: 1.8 * 4 },
  { x: 2.7 * 4, y: 4.5 * 4 },
  { x: -1.2 * 4, y: 11.2 * 4 },
  { x: -7.6 * 4, y: 1.9 * 4 },
  { x: -1.3 * 4, y: -3.8 * 4 },
];

const verticesC = [
  { x: -8.5 * 4, y: -14.8 * 4 },
  { x: 7.6 * 4, y: -1.6 * 4 },
  { x: 6.5 * 4, y: 8.8 * 4 },
  { x: 2.7 * 4, y: 9.5 * 4 },
  { x: -11.2 * 4, y: 11.2 * 4 },
  { x: -7.6 * 4, y: 1.9 * 4 },
  { x: -1.3 * 4, y: -3.8 * 4 },
];

function draw() {
  background('white');
  rectMode(CENTER);
  noStroke();
  if (width != isSame) {
    Composite.remove(engine.world, [ropeA, ropeB, ropeC]);
    addBodies();
    isSame = width;
  }

  let curWidth = width / W;
  let curHeight = height / H;

  // ropeA에 도형 그리기
  fill(255, 51, 0);
  for (let i = 0; i < ropeA.bodies.length; i++) {
    const pos = ropeA.bodies[i].position;
    const angle = ropeA.bodies[i].angle;
    push();
    beginShape();
    translate(pos.x, pos.y);
    rotate(angle);
    verticesA.forEach((each) => {
      vertex(each.x * curWidth, each.y * curHeight);
    });
    endShape(CLOSE);
    pop();
  }

  // ropeB에 도형 그리기
  fill(102, 102, 255);
  for (let i = 0; i < ropeB.bodies.length; i++) {
    const pos = ropeB.bodies[i].position;
    circle(pos.x, pos.y, width / 25);
  }

  // ropeC에 도형 그리기
  fill(0, 204, 51);
  for (let i = 0; i < ropeC.bodies.length; i++) {
    const pos = ropeC.bodies[i].position;
    const angle = ropeC.bodies[i].angle;
    push();
    beginShape();
    translate(pos.x, pos.y);
    rotate(angle);
    verticesC.forEach((each) => {
      vertex(each.x * curWidth, each.y * curHeight);
    });
    endShape(CLOSE);
    pop();
  }
}

function addBodies() {
  ropeA = Composites.stack(width / 4, 50, 1, 8, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, width / 10, height / 30);
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
  });

  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: {
        x: ropeA.bodies[0].position.x,
        y: ropeA.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );

  ropeB = Composites.stack(width / 2, 50, 1, 10, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20);
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
  });

  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: {
        x: ropeB.bodies[0].position.x,
        y: ropeB.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );

  ropeC = Composites.stack((width * 3) / 4, 50, 1, 8, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, width / 10, height / 30);
  });

  Composites.chain(ropeC, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
  });

  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: {
        x: ropeC.bodies[0].position.x,
        y: ropeC.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [ropeA, ropeB, ropeC]);
}
