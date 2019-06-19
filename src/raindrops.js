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

    this.raindrop = loadImage("/assets/raindrop2.png");
    this.raindrop2 = loadImage("/assets/raindrop2.png");
  }

  draw() {
    image(this.raindrop, this.x, this.y, this.size, this.size);
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

      let score = (document.getElementById("score").innerHTML =
        "SCORE: " + game.score);
      let level = (document.getElementById("level").innerHTML =
        "LEVEL: " + game.level);
      return true;
    }
    if (this.y === HEIGHT) {
      game.score -= 1;
      console.log(game.score);
      return true;
    }
  }
}
