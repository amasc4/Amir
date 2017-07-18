var x = 100
var y = 100
var a = 480
var b = 100
var c = 0
var d = 100
var xregulate = 5
var yregulate = 5

function setup(){
    createCanvas(500, 500)
    background(225)
}

function draw(){
    background(225);
    if (keyIsDown(DOWN_ARROW)){
        b+=10
        if (b>495) {
            b = 0
        }else if (b<5) {
            b = 450
        }
    }
    if (keyIsDown(UP_ARROW)) {
        b-=10
        if (b>495) {
            b = 0
        }else if (b<5) {
            b = 450
        }
    }if (keyIsDown(87)) {
        d-=10
        if (d>495) {
            d = 0
        }else if (d<5){
            d = 450
        }
    }if (keyIsDown(83)) {
        d+=10
        if (d>495) {
            d = 0
        }else if (d<5){
            d = 450
        }

    }

    
    clear();
    fill(250, 0, 0)
    rect(a, b, 19, 130)
    rect(c, d, 19, 130)
    fill(250, 0, 0)
    ellipse(x, y, 15, 15);
    x = xregulate + x
    if (x == a && b-130 < y < b) {
        xregulate = -xregulate
    }
    if (x == c && d-130 < y < d)
        xregulate = -xregulate
    y = yregulate + y

    
}