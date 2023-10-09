let oscillators = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 1; i++) {
    oscillators.push(
      new Oscillator(
        periodToAngularVel(1000),
        periodToAngularVel(3000),
        random(20, width / 2),
        random(20, height / 2)
      )
    );
  }
  background(255);
}

function draw() {
  background(255, 1);
  oscillators.forEach((eachOscillators) => {
    eachOscillators.update();
    eachOscillators.display();
    eachOscillators.displaySeparate();
  });
}

function periodToAngularVel(millis) {
  const oneSec = getTargetFrameRate();
  const periodAsFrame = (millis / 1000) * oneSec;
  return TAU / periodAsFrame;
}
