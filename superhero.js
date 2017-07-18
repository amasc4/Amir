function Superhero(realName, ability, gender, archEnemy, age, weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
    console.log("Yo! My name is " + + realName)
}

    this.callForHelp = function(call){
        console.log(call);
    }
}

var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "Lex Luther", 30, "Kryptonite")
var wonderWoman = new Superhero("Dianna Price", "Super Strength", "Female", "Donald Trump", 20, "Guns");

superMan.ability = "Lazer Vision"
wonderWoman.archEnemy = superMan;

wonderWoman.callForHelp("I'm Booling out!")

superMan.callForHelp("It's not looking good right now!")