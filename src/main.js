const player = new Player(200);
const game = new Game();
// const raindrops = new Raindrops();

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("game");
  game.setup();
  player.setup();
  // raindrops.setup();
}

function draw() {
  game.draw();
  player.draw();
  // raindrops.draw();
}

function keyPressed() {
  player.playerMove();
}

function collisionDetection() {}
