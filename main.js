const player = new Player(200);
let game = new Game();
let button;
let bgSound;

function preload() {
  // bgSound = loadSound("assets/BgMusic.mp3");
}

function setup() {
  let canvas = createCanvas(1000, 600);
  // bgSound.loop();
  canvas.parent("game");
  game.setup();
  button = createButton("Start Game");
  button.style(
    "color: orange; background-color:  rgb(190, 162, 189); width: 200px; height: 50px; font-size: 30px; font-style: oblique; font-family: impact; text-shadow: 0 0 5px black;"
  );
  button.position(WIDTH / 2.6, HEIGHT / 0.9);
  button.mousePressed(startGame);
}

function startGame() {
  loop();
  game.started = true;
  button.hide();
  document.getElementById("gameState").style.visibility = "hidden";
  bgSound = loadSound("assets/BgMusic.mp3");
}

function draw() {
  if (bgSound && bgSound.isLoaded() && !bgSound.isPlaying()) bgSound.loop();
  if (game.over === true) {
    game.setup();
  } else {
    game.draw();
  }
}

function collisionDetection() {}

function points(games) {
  let x = x;
  let y = y;
  let points = 0;
  let gameSplit = games[i].split(":");

  for (i = 0; i > games.length; i++)
    if (gameSplit[1] > gameSplit[2]) {
      points += 3;
    } else if (gameSplit[1] < gameSplit[2]) {
      points += 0;
    } else if (gameSplit[1] === gameSplit[2]) {
      points += 1;
    }
  return points;
}
