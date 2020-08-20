var x = 50

function preload() {
    bg = loadImage('images/windows-background.jpeg');
    flame = createImg('images/fire.gif')
}

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("canvas-container");
    image(bg, 0, 0);
}

function draw() {
    fill(180);
    rect(0, 0, width, 50);
    fill(0);
    text("Play Again", 350, 20, width / 2);
    cursor('images/flamethrower.cur');
}

function mousePressed() {
    if (mouseY < 50) {
        setup();
    }
}

function mouseDragged() {
    var flames = flame.position(mouseX + 500, mouseY + 80)
    if (mouseY > 70) {
    fill(255);
    noStroke();
    image(flames, mouseX - 60, mouseY - 30, x, x);
    // flame.position(mouseX + 500, mouseY + 80)
    }
    
}
