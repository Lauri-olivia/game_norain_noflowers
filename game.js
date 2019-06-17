class Game {
  constructor() {
    this.drops = [];
  }

  setup() {
    this.blumen1 = loadImage("/assets/blumen.png");
    this.blumen2 = loadImage("/assets/blumen.png");
    this.bg = loadImage("/assets/final-bg.png");
    // this.clouds = loadImage("/assets/background-clouds.png");
  }

  draw() {
    if (frameCount % 50 == 0) {
      this.drops.push(new Raindrops());
      this.drops[this.drops.length - 1].setup();
    }

    image(this.bg, 0, 200, 1000, 600);
    image(this.blumen1, 0, 400, 800, 400);
    image(this.blumen2, 200, 400, 800, 400);

    // image(this.clouds, 0, 20, 600, 150);
    this.drops.forEach((raindrop, i) => {
      raindrop.draw();
      if (raindrop.collisionDetection()) {
        this.drops.splice(i, 1);
      }
    });
  }
}
