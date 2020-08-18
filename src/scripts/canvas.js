function setup() {
    var canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    background(200);
    // fill(200);
    // rect(0, 0, width, 50);
    // fill(0);
    // text("Play Again", 350, 20, width / 2); 
}

function draw() {
    fill(200);
    rect(0, 0, width, 50);
    fill(0);
    text("Play Again", 350, 20, width / 2); 
}

function mousePressed() {
    if (mouseY < 50) {
        background(200);
    }
}

function mouseDragged() {
    if (mouseY > 55) {
    ellipse(mouseX, mouseY, 20, 20);
    }
}