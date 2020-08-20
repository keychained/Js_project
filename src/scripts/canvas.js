var x = 50

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("canvas-container");
    loadImage('windows-background.jpeg', img => {
        image(img, 0, 0);
    });
}

function draw() {
    fill(180);
    rect(0, 0, width, 50);
    fill(0);
    text("Play Again", 350, 20, width / 2);
}

function mousePressed() {
    if (mouseY < 50) {
        setup();
    }
}

function mouseDragged() {
    if (mouseY > 70) {
    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, x, x);
    }
}