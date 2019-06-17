class Raindrops {
  constructor() {}

  setup() {
    this.x = random(100, 800);
    this.y = 200;
    this.initialangle = random(0, 2);
    this.gravity = 0.1;
    this.velocity = 0.5;
    this.size = 50;
    this.raindropsBottom = this.x;

    this.raindrop = loadImage("/assets/raindrop2.png");
  }

  draw() {
    image(this.raindrop, this.x, this.y, this.size, this.size);
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.collisionDetection();
  }
  collisionDetection() {
    if (
      /*   player.x < this.x &&
      this.x > player.x + player.width &&
      player.y < this.y + 20 */
      this.x > player.x &&
      this.x < player.x + 150 &&
      this.y > player.y + 20 &&
      this.y < HEIGHT
    ) {
      return true;
    }
  }
}
