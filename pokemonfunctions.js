var myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
"w", "x", "y", "z"];

function randLetter() {
    var letter = Math.round(Math.random() * 25);
    console.log(myArray[letter])
}

function randWord() {
    var stringLength = Math.round(Math.random() * 10);
    for (i=0; i<stringLength; i++) {
        randLetter();
    }
}

function randSentence() {
    var randomLetter = randLetter
    var sentenceLength = Math.round(Math.random() * 25)
    console.log("A")
    for (i=0; i<sentenceLength; i++) {
         console.log(randWord+" ")
         console.log(".")
    }
}

randSentence();