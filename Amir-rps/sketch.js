function setup(){
    createCanvas(windowWidth, windowHeight);
    background(200, 200, 200)
    input = createInput();
    input.position(20, 65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(init);
    initials = createElement('h2', 'Insert your initials');
    initials.position(20, 5);
}

function init(){
    var name = input.value()
    initials.html(name)
    input.value('')
    
}
var value;
var value2;
var value3;

function draw(){
    fill("white")
    rect(620, 100, 160, 160, 20);
    textSize(28);
    fill("black")
    text("CPU", 670, 160)
    value = "white"
    value2 = "white"
    value3 = "white"
    fill(value)
    rect(450, 500, 160, 160, 20);
    textSize(28);
    fill("black")
    text(" ROCK", 480, 600)
    fill(value2)
    rect(620, 500, 160, 160, 20);
    textSize(28);
    fill("black")
    text(" PAPER", 645, 600)
    fill(value3)
    rect(790, 500, 160, 160, 20);
    textSize(28);
    fill("black")
    text("SCISSORS", 800, 600)

    if (mouseIsPressed){
        if (mouseX >= 450 && mouseX <= 610 && mouseY >= 500 && mouseY <= 650) {
        value = "blue"
    }}
}

function mouseClicked(){
    if (mouseX >= 450 && mouseX <= 610 && mouseY >= 500 && mouseY <= 650) {
        value = "blue"
    }if (620 <= mouseX <= 780 && 500 <= mouseY <= 650) {
        value2 = "blue"
    }if (790 <= mouseX <= 940 && 500 <= mouseY <= 650) {
        value3 = "blue"
    }

}

var scissors;
var rock;
var paper; 
var playerScissors;
var playerRock; 
var playerPaper;
var playerChoice;
var cpuChoice = Math.round(Math.random()*2);

if(cpuChoice == 0){
cpuChoice = scissors;
}
else if (cpuChoice == 1){
cpuChoice == paper;
}
else if (cpuChoice ==2){
cpuChoice == rock;
}

if (playerChoice == playerRock && cpuChoice == paper){
       $("body").append("<h1>  CPU wins </h1>")
   }
else if (playerChoice == playerRock && cpuChoice == scissors){
       $("body").append("<h1> Player wins </h1>")
   }
else if (playerChoice == playerRock && cpuChoice == rock){
       $("body").append("<h1> It was a tie! </h1>")
   }   
else if (playerChoice == playerPaper && cpuChoice == Scissors){
       $("body").append("<h1>  CPU wins </h1>")
   }
else if (playerChoice == playerPaper && cpuChoice == rock){
       $("body").append("<h1>  Player wins </h1>")
   }
else if (playerChoice == playerPaper && cpuChoice == paper){
       $("body").append("<h1>  It was a tie! </h1>")
}
else if (playerChoice == playerScissors && cpuChoice == paper){
   $("body").append("<h1>  Player wins </h1>")
}
else if (playerChoice == playerScissors && cpuChoice == rock){
   $("body").append("<h1>  CPU wins </h1>")
}
else if (playerChoice == playerScissors && cpuChoice == scissors){
   $("body").append("<h1>  It was a tie! </h1>")
}

var scissors;
var rock;
var paper; 
var playerScissors;
var playerRock; 
var playerPaper;
var playerChoice;
var cpuChoice = Math.round(Math.random()*2);

if(cpuChoice == 0){
cpuChoice = scissors;
}
else if (cpuChoice == 1){
cpuChoice == paper;
}
else if (cpuChoice ==2){
cpuChoice == rock;
}

if (playerChoice == playerRock && cpuChoice == paper){
       $("body").append("<h1>  CPU wins </h1>");
   }
else if (playerChoice == playerRock && cpuChoice == scissors){
       $("body").append("<h1> Player wins </h1>");
   }
else if (playerChoice == playerRock && cpuChoice == rock){
       $("body").append("<h1> It was a tie! </h1>");
   }   
else if (playerChoice == playerPaper && cpuChoice == Scissors){
       $("body").append("<h1>  CPU wins </h1>");
   }
else if (playerChoice == playerPaper && cpuChoice == rock){
       $("body").append("<h1>  Player wins </h1>");
   }


