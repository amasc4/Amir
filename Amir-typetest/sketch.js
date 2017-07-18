function setup(){
    createCanvas(1000, 1000);
    background(225);
    textSize(12)
    text("Please type sentence below", 100, 100)
    textSize(12)
    text("Amir is beautiful", 100, 200)

    var input, button, value;
    input = createInput();
    input.position(100, 300);

    button = createButton('Check');
    button.position(input.x + input.width, 300);

    value = createElement("Hi")
    value.position(100, 400)
    textSize(12)

    textSize(12)
    var x = 0;
    text("Current Points: " + x, 100, 500)

    if (value="Amir is beautiful"){
        x = x + 10
    }


}