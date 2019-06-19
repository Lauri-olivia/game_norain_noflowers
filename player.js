class Player {
  constructor(x, y) {
    this.x = x;
    this.y = 430;
  }

  setup() {
    this.gieskanne = loadImage("/assets/watering-can-3340478_1920.png");
  }
  draw() {
    image(this.gieskanne, this.x, this.y, 150, 150);
    // this.limitPlayer();
    if (keyIsDown(LEFT_ARROW) && this.x > 100) {
      this.x -= 8;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < 800) {
      this.x += 8;
    }
  }
}
