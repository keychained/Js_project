let spritesheet;
let spritedata;
let animation = [];

function preload() {
    bg = loadImage('images/windows-background.jpeg');
    flames = createImg('images/fire.gif');
    spritesheet = loadImage('images/fire_circles_sprite.png');
    spritedata = loadJSON('images/fire_circles.json');
}

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("canvas-container");
    image(bg, 0, 0);
    fill(180);
    rect(0, 0, width, 50);
    fill(0);
    text("Play Again", 350, 20, width / 2);
    cursor('images/flamethrower.cur');
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i ++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
    console.log(animation);
}

function draw() {
    if (mouseIsPressed && mouseY > 30 && mouseY < 610) {
    image(animation[frameCount % animation.length], mouseX - 30, mouseY - 10);
    }
    // fill(220, 12);
    // image(bg, 0, 0);
    // bg(0, 0, 800, 800);
    // fill(0);
    // noStroke();
    // ellipse(mouseX, mouseY, 60, 60);
    // image(bg, 0, 0);
    // fill(180);
    // rect(0, 0, width, 50);
    // fill(0);
    // text("Play Again", 350, 20, width / 2);
    // cursor('images/flamethrower.cur');
    // image(bg, 0, 0);
    // if (mouseY > 40 && mouseY < 640 && mouseX > 30 && mouseX < 850 && mouseIsPressed) {
    //     fill(0, 10);
    //     noStroke();
    //     fill(255);
    //     ellipse(mouseX - 60, mouseY, 30, 30);
    //     flames.position(mouseX + 480, mouseY + 50);
    // }
}

function mousePressed() {
    if (mouseY < 50) {
        setup();
    }
}

// function mouseDragged() {
//     if (mouseY > 40 && mouseY < 640 && mouseX > 30 && mouseX < 850) {
//         fill(0, 20);
//         noStroke();
//         // ellipse(mouseX - 60, mouseY, 30, 30);
//         // image(animation[frameCount % animation.length], mouseX, mouseY);
//         // flames.position(mouseX + 520, mouseY);
//     }
// }

function mouseReleased() {
    if (mouseY > 40 && mouseY < 640 && mouseX > 30 && mouseX < 850) {
        // image(animation[frameCount % animation.length], mouseX, mouseY);
       flames.position(mouseX + 520, mouseY + 50);
    }
}