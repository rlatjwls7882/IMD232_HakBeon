class Flock {
  constructor() {
    this.boids = [];
  }

  run() {
    this.boids.forEach((each) => {
      each.run(this.boids);
    });
  }

  addBoid(boid) {
    this.boids.push(boid);
  }
}
