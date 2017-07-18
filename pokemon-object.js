function Pokemon(name, type, HP, attack, defense, speed) {
    this.name = name;
    this.type = type;
    this.HP = HP;
    this.attack = attack;
    this.defense = defense
    this.speed = speed

}

var pikachu = new Pokemon("Pikachu", "Electric", 35, 40, 90)
var charizard = new Pokemon("Charizard", ["Fire", "Flying"], 78, 84, 78)

function printRoster(name1, name2) {
    console.log(name1, name2)
}

// printRoster(pikachu, charizard);

// function pokemonAttack(name1, name2) {
//     pikachu.HP -= 10
//     charizard.HP -= 10
//     console.log(name1, name2)
// }

// pokemonAttack(pikachu, charizard);

function randomDown(name1, name2){
   var rand = Math.floor(Math.random() * 2)
   if (rand == 1){
       pikachu.HP -= 10
   }else {
       charizard.HP -= 10
   }
   console.log(name1, name2)
   console.log(rand)
}

randomDown(pikachu, charizard);