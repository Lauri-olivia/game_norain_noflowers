class Game {
  constructor() {
    this.drops = [];
    this.score = 0;
    this.level = 0;
    this.x = 0;
    this.x1 = WIDTH;
  }

  setup() {
    this.blumen1 = loadImage("/assets/blumen.png");
    this.blumen2 = loadImage("/assets/blumen.png");
    this.bg = loadImage("/assets/final-bg.png");
    this.clouds = loadImage("/assets/background-clouds.png");
  }

  draw() {
    image(this.bg, 0, 0, 1000, 700);
    image(this.blumen1, 0, 200, 800, 400);
    image(this.blumen2, 200, 200, 800, 400);

    const imgWidth = this.x.width;
    image(this.clouds, this.x, 10, 1000, 200);
    image(this.clouds, this.x1, 10, 1000, 200);
    if (this.x <= -WIDTH) {
      this.x = WIDTH;
    }
    if (this.x1 <= -WIDTH) {
      this.x1 = WIDTH;
    }
    this.x -= 2;
    this.x1 -= 2;

    if (frameCount % 100 == 0) {
      this.drops.push(new Raindrops());
      this.drops[this.drops.length - 1].setup();
    }

    collisionDetection();

    // image(this.clouds, 0, 20, 600, 150);
    this.drops.forEach((raindrop, i) => {
      raindrop.draw();
      if (raindrop.collisionDetection()) {
        this.drops.splice(i, 1);
      }
    });

    if (game.score % 20 === 0) {
      game.level += 1;
      game.score += 1;
    }
  }
}
