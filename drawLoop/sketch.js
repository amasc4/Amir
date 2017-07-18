var x = 100
var y = 100
var xregulate = 10
var yregulate = 24

function setup(){
    createCanvas(500, 500)
    background(225)
}

function draw(){
    background(225);
    fill(random("blue", "red"));
    ellipse(x, y, 55, 55);
    x = xregulate + x
    if (x > 500 || x < 0) {
        xregulate = -xregulate
    y = yregulate + y

    if (y > 500 || y < 0){
        yregulate = -yregulate
    }
    }
}