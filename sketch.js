let b, b1, b2, b3, b4;
// let xSpeed = 2;
// let ySpeed = 2;
let synth = new Tone.PolySynth(8, Tone.Synth);
let freeverb = new Tone.Freeverb(0.98).toMaster();
synth.connect(freeverb);

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Ball(300, 200, 40, 2);
  b1 = new Ball(200, 200, 80, 1.5);
  b2 = new Ball(180, 150, 120, 1);
  b3 = new Ball(250, 250, 60, 1.25);
  b4 = new Ball(400, 100, 100, 2.5);
}

function draw() {
  // put drawing code here
  background(0);

  b.update();
  b1.update();
  b2.update();
  b3.update();
  b4.update();
  b.show();
  b1.show();
  b2.show();
  b3.show();
  b4.show();
}

class Ball {
  constructor(x, y, r, speed) {
    this.x = x;
    this.y = y
    this.r = r;
    this.xSpeed = speed;
    this.ySpeed = speed;
  }

  update() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    if((this.x + this.r) > width) {
      synth.triggerAttackRelease("C5", "8n");
      this.xSpeed = -this.xSpeed;
    } else if((this.x - this.r) < 0) {
      synth.triggerAttackRelease("G5", "8n");
      this.xSpeed = -this.xSpeed;
    } else if((this.y - this.r) < 0) {
        synth.triggerAttackRelease("E5", "8n");
        this.ySpeed = -this.ySpeed;
    } else if ((this.y + this.r) > height) {
      synth.triggerAttackRelease("A5", "8n");
      this.ySpeed = -this.ySpeed;
    }
  }

  show() {
    noStroke();
    fill(255, 100);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
