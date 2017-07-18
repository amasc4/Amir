var prompt = require('prompt-sync')();
var money = 1000; 

var louisVuittonDuffleBag = [];

while(money > 100) {

var answer = prompt("You can buy yeezys for 400, gucci flip flops for 200, or ray bans for 100:      ")
    if(answer == "Yeezys" && money >= 500) {
        money-=400
        louisVuittonDuffleBag.push("Yeezys");
        console.log("You have successfuly bought these apirs of yeezys")
    }
    else if (answer == "Gucci Flip Flops" && money >= 300) {
        money-=200
        louisVuittonDuffleBag.push("Gucci Flip Flops");
        console.log("You have successfuly bought these apirs of Gucci Flip Flops")
    }
    else if (answer == "Ray Bans" && money >= 200) {
        money-=400
        louisVuittonDuffleBag.push("Ray Bans");
        console.log("You have successfuly bought these apirs of Ray Bans")
    }else 
        console.log("You can't get this item")
}
var x = prompt("What else do you want to buy?")
console.log("Nm ur borke b")