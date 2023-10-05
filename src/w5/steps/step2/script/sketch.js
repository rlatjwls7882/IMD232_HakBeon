const movers = [];
let attractor;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  createMover(10);
  createAttractor();
}

function draw() {
  background(255);
  attractor.display();
  displayMover();
}

// 움직이는 원들 최초 생성
function createMover(num) {
  for (let i = 0; i < num; i++) {
    const randomPos = p5.Vector.random2D()
      .mult(width / 4)
      .add(width / 2, height / 2);
    const mass = random(4, 100);
    movers.push(new Mover(randomPos.x, randomPos.y, mass));
  }
}

// 가운데 멈춰 있는 원 최초 생성
function createAttractor() {
  const attractorPos = createVector(width / 2, height / 2);
  const attractorMass = 100;
  const attractorRad = 25;
  const attractDistMin = 25;
  const attractDistMax = 100;

  attractor = new Attractor(
    attractorPos.x,
    attractorPos.y,
    attractorMass,
    attractorRad,
    attractDistMin,
    attractDistMax
  );
}

// 원들 움직이게 하기
function displayMover() {
  movers.forEach((eachMover) => {
    const force = attractor.attract(eachMover);
    eachMover.applyForce(force);
    eachMover.update();
    eachMover.display();
    eachMover.displayVectors();
  });
}
