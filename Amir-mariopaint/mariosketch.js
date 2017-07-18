function mouseMoved() {
    fill(random("black"))
    ellipse(mouseX, mouseY, 5, 5);
    rect(mouseX, mouseY, 5, 5);
    quad(mouseX, mouseY, 10, 2);
    triangle(mouseX, mouseY, 5, 5)
    return false;
}

function setup(){
    createCanvas(1000, 1000);
    mouseMoved();
}