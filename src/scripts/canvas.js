let spritesheet;
let spritedata;
let fire_animation;
let animations = [];
let backgrounds = [];
let bButton;
let gButton;

function preload() {
  bg1 = loadImage("images/windows-background.jpeg");
  bg2 = loadImage("images/windows-8-background.jpg")
  bg3 = loadImage("images/windows-vista-background.jpg")
  bg4 = loadImage("images/windows-10-background.jpg")
  spritesheet = loadSpriteSheet("images/fire_circles_sprite.png", 50, 50, 61);
  fire_animation = loadAnimation(spritesheet);
  fire_animation.frameDelay = 0.5;
  backgrounds = [bg1, bg2, bg3, bg4];
    randomButton = createButton("Change Background!");
    // b2Button = createButton("Background 2");
    // b3Button = createButton("Background 3");
    // b4Button = createButton("Background 4");
    randomButton.parent("buttons");
    // b2Button.parent("buttons");
    // b3Button.parent("buttons");
    // b4Button.parent("buttons");
    randomButton.mousePressed(randomBackground);
    // b2Button.mousePressed(background2);
    // b3Button.mousePressed(background3);
    // b4Button.mousePressed(background4);
}

function setup() {
  var canvas = createCanvas(800, 550);
  canvas.parent("canvas-container");
  background = random(backgrounds);
  // b1Button = createButton("Background 1");
  // b2Button = createButton("Background 2")
  // b3Button = createButton("Background 3");
  // b4Button = createButton("Background 4");
  // b1Button.parent("buttons");
  // b2Button.parent("buttons");
  // b3Button.parent("buttons");
  // b4Button.parent("buttons");
  // b1Button.mousePressed(background1);
  // b2Button.mousePressed(background2);
  // b3Button.mousePressed(background3);
  // b4Button.mousePressed(background4);
  cursor("images/flamethrower.cur");
  // let frames = spritedata.frames;
  // for (let i = 0; i < frames.length; i++) {
  //   let pos = frames[i].position;
  //   let img = spritesheet1.get(pos.x, pos.y, pos.w, pos.h);
  //   animations.push(img);
  // }
}

function draw() {
  image(background, 0, 0);
  if (mouseIsPressed) {
    animation(fire_animation, mouseX, mouseY);
  }
}

function randomBackground() {
  setup();
}

// function background2() {
//   image(bg2, 0, 0);
// }

// function background3() {
//   image(bg3, 0, 0);
// }

// function background4() {
//   image(bg4, 0, 0);
// }
