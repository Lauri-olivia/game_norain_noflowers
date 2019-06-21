class Game {
  constructor() {
    this.drops = [];

    this.x = 0;
    this.x1 = WIDTH;
    this.x2 = WIDTH;
    this.x3 = WIDTH;
    this.gameState = "START";
    this.started = false;

    this.speed = 0.2;
    this.y1 = HEIGHT;
    this.y2 = HEIGHT;
    this.y3 = HEIGHT;
  }

  setup() {
    this.blumen1 = loadImage("assets/blumen.png");
    this.blumen2 = loadImage("assets/blumen.png");
    this.bg = loadImage("assets/final-bg.png");
    this.clouds = loadImage("assets/background-clouds.png");
    this.zwerg = loadImage("assets/zwerg.png");
    this.logo = loadImage("assets/logi.png");
    this.wow = loadImage("assets/wow.png");
    // this.yeah = loadImage("assets/Yeah.png");

    this.score = 0;
    this.level = 1;
    this.step = 10;
    this.over = false;

    document.getElementById("gameState").innerHTML = `Hello ☀️! <br />
    Thanks for catching raindrops, you are awesome!`;

    document.getElementById("score").innerHTML = "SCORE: " + game.score;
    document.getElementById("level").innerHTML = "LEVEL: " + game.level;

    player.setup();
  }

  draw() {
    image(this.bg, 0, 0, 1000, 700);
    image(this.blumen1, 0, this.y1, 800, 400);
    image(this.blumen1, 200, this.y2, 800, 400);
    image(this.blumen1, 50, this.y3, 800, 400);
    image(this.blumen2, 100, 260, 800, 400);
    image(this.zwerg, 840, 180, 200, 320);

    this.speed -= 0.0009;

    if (this.score > 5) {
      this.y1 = this.y1 + this.speed;
    }
    if (this.y1 < 380) {
      this.y1 = 380;
    }
    if (this.level > 1) {
      this.y2 = this.y2 + this.speed;
    }
    if (this.y2 < 300) {
      this.y2 = 300;
    }

    if (this.level > 2) {
      this.y3 = this.y3 + this.speed * 0.3;
    }
    if (this.y3 < 180) {
      this.y3 = 180;
    }

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

    image(this.wow, this.x2, 20, 200, 300);
    if (this.score > 7) {
      this.x2 = this.x2 + this.speed;
    }

    image(this.wow, this.x3, 20, 200, 300);
    if (this.score > 23) {
      this.x3 = this.x3 + this.speed * 0.5;
    }

    if (this.started === true) {
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
        document.getElementById("gameState").style.visibility = "visible";
        noLoop();
        this.over = true;
        button.show();
      }

      if (game.score > 30) {
        document.getElementById("gameState").style.visibility = "visible";
        document.getElementById("gameState").innerHTML =
          "WINNER! Thanks for your help, you make the world a better place. Spread love!";
      }
    }
  }
}
