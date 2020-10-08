let spritesheet;
let spritedata;
let fire_animation;
let animations = [];
let backgrounds = [];
let fires;
let firesss;

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
  randomButton.parent("buttons");
  randomButton.mousePressed(randomBackground);
}

function setup() {
  var canvas = createCanvas(800, 550);
  canvas.parent("canvas-container");
  background = random(backgrounds);
  cursor("images/flamethrower.cur");
  fires = new Group();
  // for (let i = 0; i < 20; i++) {
  //   let fire = createSprite(random(0, width), random(0, height));
  //   fire.addAnimation("floating", fire_animation);
  //   fires.add(fire);
  // }
}

function draw() {
  image(background, 0, 0);
  if (mouseIsPressed) {
    animation(fire_animation, mouseX, mouseY);
    let fire = createSprite(mouseX, mouseY);
    fire.addAnimation("floating", fire_animation);
    fires.add(fire);
  }
  drawSprites(fires);
}

function randomBackground() {
  setup();
}

// function drawFire() {
//   let firesss = getSprites(fires);
//   for (let i = 0; i < firesss.length; i++) {
//     let firess = firesss[i];
//     if (firess.position.x == mouseX && firess.position.y == mouseY) {
//       firess.visible = true;
//     } else {
//       firess.visible = false;
//     }
//   }
// }