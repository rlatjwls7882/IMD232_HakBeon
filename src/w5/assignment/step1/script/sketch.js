let randR = [];
let randG = [];
let randB = [];
let strokes;
let rad = 25;
let angle = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);

  for (let i = 0; i < 4; i++) {
    randR.push(Math.floor(random(255)));
    randG.push(Math.floor(random(255)));
    randB.push(Math.floor(random(255)));
  }
  strokes = new Array(64);

  for (let i = 0; i < 64; i++) {
    strokes[i] = new Array(3);
    strokes[i][0] = randR[Math.floor(random(0, 5))];
    strokes[i][1] = randG[Math.floor(random(0, 5))];
    strokes[i][2] = randB[Math.floor(random(0, 5))];
  }

  for (let i = 0; i < 64; i++) {
    angle.push((TAU / 360) * (-90 + 15 * i));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      strokeWeight(2);
      noFill();
      let num = i * 8 + j;
      stroke(strokes[num][0], strokes[num][1], strokes[num][2]);

      let gap = (width - rad * 16) / 9;
      let x = gap * (j + 1) + (2 * j + 1) * rad;
      let y = gap * (i + 1) + (2 * i + 1) * rad;

      ellipse(x, y, rad * 2);

      let pointX = cos(angle[num]) * rad + x;
      let pointY = sin(angle[num]) * rad + y;
      line(x, y, pointX, pointY);

      noStroke();
      fill(0);
      ellipse(pointX, pointY, 10);

      angle[num] += (TAU / 360) * 1;
    }
}
