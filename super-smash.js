var prompt = require('prompt-sync')();

var mashArray = ["Place1", "Place2", "Place3", "Place4"];
var firstQuestion = [1, 2]
var secondQuestion = ["Mario", "Luigi"]


    var firstQ = prompt("How many times will you strike")
    var secondQ = prompt("Who will you attack")


function battle() {
    console.log("You attacked " + secondQ + ", " + firstQ + " times in " + mashArray[Math.round(Math.random() * 3)])
}

battle(); 