const player = new Player(200);
let game = new Game();
let song;
let slider;
let button;

function preload() {
  song = loadSound(
    "assets/Louis Armstrong - What A Wonderful World (Lyrics).mp3"
  );
}

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("game");
  song.loop();
  song.play();
  game.setup();
  song.setVolume(0.5);
  button = createButton("Start Game");
  button.style("color: red; background-color: blue");
  button.position(WIDTH / 2, HEIGHT / 2);
  button.mousePressed(startGame);
}

function startGame() {
  loop();
  game.started = true;
  button.hide();
}

function draw() {
  if (game.over === true) {
    game.setup();
  } else {
    game.draw();
  }
}

function collisionDetection() {}
