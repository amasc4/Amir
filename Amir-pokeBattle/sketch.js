function setup(){
    createCanvas(1200, 1000)
    background("orange")

    fill("white")
    rect(20, 560, 900, 200, 10);
    fill("white")
    rect(20, 60, 900, 500, 20)
    fill("green")
    stroke(0, 0, 0)
    rect(140, 280, 160, 20)
    rect(580, 120, 200, 20)

    fill(240, 240, 240)
    rect(20, 60, 100, 500, 20, 0, 0, 20)
    rect(820, 60, 100, 500, 0, 20, 20, 0)
    tint(100,700)

    var userInput = prompt("What's your User Name?")
    fill("black")
    textSize(25)
    text("CPU", 840, 200)
    text(userInput, 40, 480)

    function Pokemon(name, attacks, attacksTypes, hp, legendary, types){
    this.name = name;
    this.attacks = attacks;
    this.attacksTypes = attacksTypes;
    this.hp = hp;
    this.legendary = legendary;
    this.types = types;
}

    var pikachu = new Pokemon ("Pikachu", ["Agility = -33Dmg", "Discharge= -37Dmg", "Thunder= -43Dmg", "Light Screen= -50Dmg"], ["Pyschic", "Electric", "Electric", "Pyschic"], 35, false, "electric");
    var mewtwo = new  Pokemon ("Mewtwo", ["Amnesia", "Safeguard", "Aura Sphere", "Psystrike"], ["Pyschic", "Normal", "Fighting", "Pyschic"], 106 , true , "pyschic");
    fill("black")
    textSize(18)
    text("      Pikachu      HP: " + pikachu.hp, 120, 270)
    text("Mewtwo           HP: " + mewtwo.hp, 580, 110)
    textSize(25)
    text("CPU", 840, 200)
    text(userInput, 40, 480)

    fill("red")
    stroke(0, 0, 0)
    var x = 0
    var y = 0
    var xx = 580
    var yy = 140
    rect(xx, 120, x, 20)
    rect(yy, 280, y, 20)
}


function draw(){


    fill("black")
    textSize(32);
   
    text("ATTACKS:", 25, 600);

    textSize(16);
    text("Select one of the attack options from down below:", 25, 620);

    stroke(0, 0, 0)
    fill("white")
    rect(25, 650, 200, 50);
   

    rect(250, 650, 200, 50);


    rect(475, 650, 200, 50);


    rect(700, 650, 200, 50);
    fill("black")
    textSize(18)
    text("Agility", 100, 670)
    text("Attack", 98, 690)
    text("Discharge", 310, 670)
    text("Attack", 323, 690)
    text("Thunder", 540, 670)
    text("Attack", 548, 690)
    text("Light Screen", 750, 670)
    text("Attack", 770, 690)
    
    fill("yellow")
    rect(180, 320, 100, 200, 20)
    fill("pink")
    rect(630, 150, 100, 200, 20)
    fill("green")
    
    

    
}
function delay(ms) {
var cur_d = new Date();
var cur_ticks = cur_d.getTime();
var ms_passed = 0;
while(ms_passed < ms) {
var d = new Date(); // Possible memory leak?
var ticks = d.getTime();
ms_passed = ticks - cur_ticks;
// d = null; // Prevent memory leak?
}
}

function mouseClicked() {
    fill("red")
    stroke(0, 0, 0)
    var x = 0
    var y = 0
    var xx = 580
    var yy = 140
    rect(xx, 120, x, 20)
    rect(yy, 280, y, 20)
    if (mouseX > 25 && mouseX < 225 && mouseY > 650 && mouseY < 700) {
        fill("red")
    stroke(0, 0, 0)
    var x = 80
    var y = 80
    var xx = 580
    var yy = 140
    rect(xx, 120, x, 20)
    rect(yy, 280, y, 20)
        x = x+90
        xx = xx+110
        window.alert("")
    }if (mouseX > 250 && mouseX < 450 && mouseY > 650 && mouseY < 700) {
        
    }if (mouseX > 475 && mouseX < 675 && mouseY > 650 && mouseY < 700) {
        
    }
   
    
}
