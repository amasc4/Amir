var HP = 100;
var gold = 0;
var numberDefeated = 0;

function updateStats(){
    $("#stats").text("HP: " + HP + " // Gold: " + gold + " //Ogres Slain " + numberDefeated)
}

function spawnOgre(){
    $("#ogres").prepend(
    "<img src='https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png'>"
    )
}

function attack(){
    if(HP>0){ 
        if(Math.random() * 100 > gold) {
            gold += 10
            numberDefeated++

            $("#ogres").prepend(
                "<p style='color:blue'> You won! + 10 gold. </p>"
            );
        }else {
            gold --;
            HP --;
            $("#ogres").prepend(
                "<p style='color: red'> You Lost - 1 gold</p>"
            );
        }
        updateStats();
        spawnOgre();
}else {
    // game over
    $("#ogres").prepend(
        "<h1> GAME OVER </h1>"
    );
}
}



function setup() {
    $("body").append(
    "<h1> welcome to ogre fighter </h1>"
);
    $("body").append(
    "<div> <h3> STATS </h3> <p id='stats'> </p> </div>"
    )
    $("body").append(
        "<button onclick='attack()'> Attack the Ogre! </button>"
    )
    $("body").append(
    "<div id='ogres'></div>"
    )

    updateStats();
}



//Setup HTML ELEMENT
/* aDD tITLE TO html - needs setup
show user stats
add random image of ogre
when player clicks attack we need setup
if player has HP 
    if plyaefr defeats ogre 
        add paragrpah saying u win
add gold to a player
get rid of defeated oge=res
else add paragraph tag saying you lost
    - gold
- hp

edit stats

else 
    game over
*/
$(document).ready(setup);
