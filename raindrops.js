class Raindrops {
  constructor() {}

  setup() {
    this.x = random(100, 800);
    this.y = 50;
    this.initialangle = random(0, 2);
    this.gravity = 0.1 * game.level;
    this.velocity = 0.5;
    this.size = 50;
    this.raindropsBottom = this.x;

    // this.raindrop1 = loadImage("/assets/raindrop1.png");
    this.raindrop2 = loadImage("/assets/raindrop2.png");
    // this.raindrop3 = loadImage("/assets/raindrop3.png");
    // this.sun = loadImage("/assets/sun.png");
  }

  draw() {
    image(this.raindrop2, this.x, this.y, this.size, this.size);
    this.velocity += this.gravity;
    this.y += this.velocity;
  }

  collisionDetection() {
    if (
      this.x > player.x &&
      this.x < player.x + 150 &&
      this.y > player.y + 20 &&
      this.y < HEIGHT
    ) {
      game.score += 1;
      console.log(game.score);

      document.getElementById("score").innerHTML = "SCORE: " + game.score;
      document.getElementById("level").innerHTML = "LEVEL: " + game.level;
      return true;
    }
    if (this.y >= HEIGHT) {
      game.score--;
      console.log(game.score);

      document.getElementById("score").innerHTML = "SCORE: " + game.score;
      document.getElementById("level").innerHTML = "LEVEL: " + game.level;
      return true;
    }
  }
}
