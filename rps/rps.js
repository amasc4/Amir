
function userChoice(){
    userPick = prompt("Pick rock(r), paper(p) or scissors(s)") 
} 
userChoice();

var playerChoice = userChoice;
var cpuChoice = "s";



if (playerChoice == "r" && cpuChoice == "p") {
    console.log("CPU won because you chose rock and it chose paper");
}
if (playerChoice == "r" && cpuChoice == "s") {
    console.log("You won because you chose rock and it chose scissors");
}
if (playerChoice == cpuChoice) {
    console.log("It's a draw!");
}
if (playerChoice == "p" && cpuChoice == "s") {
    console.log("Cpu won because it chose scissors");
}
if (playerChoice == "p" && cpuChoice == "r") {
    console.log("You won because you chose paper")
}
if (playerChoice == "s" && cpuChoice == "p") {
    console.log("You won because you chose scissors");
}
if (playerChoice == "s" && cpuChoice == "r") {
    console.log("You lost because the computer chose rock")
}else {
    console.log("User input not valid")
}