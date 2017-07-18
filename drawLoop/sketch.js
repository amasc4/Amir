var x = 100
var y = 100
var xregulate = 80
var yregulate = 20

function setup(){
    createCanvas(500, 500)
    background(225)
}

function draw(){
    background(225);
    ellipse(x, y, 55, 55);
    x = xregulate + x
    if (x > 500 || x < 0) {
        xregulate = -xregulate
    y = yregulate + y

    if (y > 425 || y < 50){
        yregulate = -yregulate
    }
    }
}