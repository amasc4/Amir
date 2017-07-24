var img;

function setup(){
    createCanvas(windowWidth, windowHeight)
    img = loadImage("Sketch (1).png");
}

function draw(){
    image(img, 0, 0);
}