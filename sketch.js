let particles;

function setup() {
  createCanvas(640, 480);
  particles = [];
}

function mouseDragged(){
  particles[particles.length] = new Particle(mouseX, mouseY, dist(pmouseX, pmouseY, mouseX, mouseY));
}

function draw() {
  background(0);
  particles.forEach(particle => {
    particle.show();
  });
  fill(255,0,0);
  textSize(100);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  text(particles.length, width/2, height/2);
}

class Particle {
  constructor(x, y, w) {
    this.pos = createVector(x, y);
    this.w = w;
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.a = random(0, 255);

  }

  show(){
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
