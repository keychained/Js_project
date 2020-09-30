let spritesheet;
let spritedata;
let animation = [];
let backgrounds = [];
let bButton;
let gButton;

function preload() {
  bg1 = loadImage("images/windows-background.jpeg");
  bg2 = loadImage("images/windows-8-background.jpg")
  bg3 = loadImage("images/windows-vista-background.jpg")
  bg4 = loadImage("images/windows-10-background.jpg")
  spritesheet = loadImage("images/fire_circles_sprite.png");
  spritedata = loadJSON("images/fire_circles.json");
}

function setup() {
  var canvas = createCanvas(800, 550);
  canvas.parent("canvas-container");
  image(bg1, 0, 0);
  b1Button = createButton("Background 1");
  b2Button = createButton("Background 2")
  b3Button = createButton("Background 3");
  b4Button = createButton("Background 4");
  b1Button.parent("buttons");
  b2Button.parent("buttons");
  b3Button.parent("buttons");
  b4Button.parent("buttons");
  b1Button.mousePressed(background1);
  b2Button.mousePressed(background2);
  b3Button.mousePressed(background3);
  b4Button.mousePressed(background4);
  cursor("images/flamethrower.cur");
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
}

function draw() {
  fires();
  // if (mouseIsPressed) {
    // image(
    //   animation[frameCount % animation.length],
    //   mouseX - 30,
    //   mouseY - 10
    // );
  // }
}

function fires() {
  for (let i = 0; i < width; i+=20) {
    for (let j = 0; j < height; j+=30)
   image(animation[frameCount % animation.length], i, j);
  }
}

function background1() {
  image(bg1, 0, 0);
}

function background2() {
  image(bg2, 0, 0);
}

function background3() {
  image(bg3, 0, 0);
}

function background4() {
  image(bg4, 0, 0);
}
