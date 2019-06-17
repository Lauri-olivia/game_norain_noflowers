class Player {
  constructor(x, y) {
    this.x = x;
    this.y = 630;
    this.r = this.width = 800;
  }

  setup() {
    this.gieskanne = loadImage("/assets/watering-can-3340478_1920.png");
  }
  draw() {
    image(this.gieskanne, this.x, this.y, 150, 150);
    this.limitPlayer();
  }

  playerMove() {
    if (keyCode === LEFT_ARROW) {
      this.x -= 100;
    } else if (keyCode === RIGHT_ARROW) {
      this.x += 100;
    }
  }

  limitPlayer() {
    if (this.x > 900) {
      this.x = 800;
    }
    if (this.x < 0) {
      this.x = 100;
    }
  }
}
