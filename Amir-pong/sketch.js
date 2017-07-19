var x = 250
var y = 250
var a = 480
var b = 100
var c = 0
var d = 100
var xregulate = 10
var yregulate = 15

function setup(){
    createCanvas(500, 500)
}

function draw(){
    background(100, 120, 14);
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
    fill(225, 12, 220)
    rect(a, b, 19, 130)
    rect(c, d, 19, 130)
    fill(225, 0, 0)
    ellipse(x, y, 15, 15);
    x = xregulate + x
    if (x == 508) {
        textSize(40)
        text("Game Over", 250, 250)
        fill(50, 50, 50)
    }
    if (x == 480 && (b+30) < y && y < (b+100)) {
        xregulate = -xregulate
    }else if (x == 480 && b < y && y <= (b+30)){
        xregulate = -xregulate
        x = xregulate + x
        y = yregulate + y
    }else if (x == 480 && (b+100) <= y && y < (b+130)){
        xregulate = -xregulate
        yregulate = -yregulate
    }
    if (x == 20 && d < y && y < (d+130)) {
        xregulate = -xregulate
    }
    if (x == 500 || x == 0) {
        window.alert("Game Over")
    }
    // y = yregulate + y
    // if (y > 425 || y < 50){
    //     yregulate = -yregulate
    // }
 
}