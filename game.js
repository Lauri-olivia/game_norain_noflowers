class Game {
  constructor() {
    this.drops = [];

    this.x = 0;
    this.x1 = WIDTH;
    this.gameState = "START";
    this.started = false;
  }

  setup() {
    this.blumen1 = loadImage("/assets/blumen.png");
    this.blumen2 = loadImage("/assets/blumen.png");
    this.bg = loadImage("/assets/final-bg.png");
    this.clouds = loadImage("/assets/background-clouds.png");
    this.zwerg = loadImage("/assets/zwerg.png");
    this.logo = loadImage("/assets/logi.png");

    this.score = 0;
    this.level = 1;
    this.step = 10;
    this.over = false;

    document.getElementById("gameState").innerHTML = `Hello Sunshine! <br />
    Try to catch as much raindrops as possible and let the flowers grow.
    <br />
    Thanks for helping, you are awesome!`;

    document.getElementById("score").innerHTML = "SCORE: " + game.score;
    document.getElementById("level").innerHTML = "LEVEL: " + game.level;

    player.setup();
  }

  draw() {
    image(this.bg, 0, 0, 1000, 700);
    image(this.blumen1, 0, 200, 800, 400);
    image(this.blumen2, 200, 200, 800, 400);
    image(this.zwerg, 850, 380, 150, 220);

    const imgWidth = this.x.width;
    image(this.clouds, this.x, 10, 1000, 200);
    image(this.clouds, this.x1, 10, 1000, 220);

    if (this.x <= -WIDTH) {
      this.x = WIDTH;
    }
    if (this.x1 <= -WIDTH) {
      this.x1 = WIDTH;
    }
    this.x -= 2;
    this.x1 -= 2;

    if (this.started === true) {
      debugger;
      player.draw();

      if (frameCount % 100 == 0) {
        this.drops.push(new Raindrops());
        this.drops[this.drops.length - 1].setup();
      }

      collisionDetection();
      this.drops.forEach((raindrop, i) => {
        raindrop.draw();
        if (raindrop.collisionDetection()) {
          this.drops.splice(i, 1);
        }
      });

      if (game.score === game.step && game.score > 0) {
        console.log("level", game.level);
        console.log("score", game.score);
        game.step += 10;
        game.level += 1;
      }
      if (game.score < 0) {
        document.getElementById("gameState").innerHTML =
          "GAME OVER! Don't be sad & try another round.";
        noLoop();
        this.over = true;
        button.show();
      }

      if (game.score > 20)
        document.getElementById("gameState").innerHTML =
          "WINNER! Thanks for your help, you make the world a better place.";
    }
  }
}
