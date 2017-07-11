var myPokemonRoster = ["pikachu", "squirtle", "charmander", "bulbasaur", "raichu"];

var firstToFlight = myPokemonRoster[0];
var secondToFlight = myPokemonRoster[1];

// pokemon for battle

myPokemonRoster.pop();

myPokemonRoster.push("ivysaur", "venusaur");
var rosterSize = myPokemonRoster.length;

// for (i=0; i<myPokemonRoster.length; i++) {
//     console.log(myPokemonRoster[i])
// }
// bonus #1
for (i=5; i>0; i+-1) {
    console.log(myPokemonRoster[i])
}
// bonus #2, refactor loop using length property is already used to begin with

// bonus #3
// if (myPokemonRoster.length>=5) {
//     for (i=0; i<myPokemonRoster.length; i++) {
//     console.log(myPokemonRoster[i])
// }
// }else{
//     console.log("You Can’t Play! Not Enough Pokemon")
// }