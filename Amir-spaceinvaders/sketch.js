
//real code
function setup()
{
   createCanvas(1100, 750);
   background(51);
}
    var space = "SPACE";
    var invaders = "INVADERS";
    var play = "PLAY";

        var shooterXPos = 500
        var shooterYPOS = 690
        var xbullet = shooterXPos
        var ybullet = shooterYPOS

    function Bullet(){
    this.x = shooterXPos + 65
    this.y = 690
    this.draw = function(){
        fill(0, 255, 0)
        stroke("black")
        rect(this.x, this.y, 5, 10)}
    this.move = function(){
        this.y = this.y - 10
    }
    }



    bullet = new Bullet()
    var bulletArray = [bullet]

    var bullet;

    var truth = true
    // function mouseClicked(){
    //     if (mouseX < 400 && mouseX > 750 && mouseY < 550 && mouseY > 700) {
    //         var randomRed = Math.round(Math.random()*255);
    //         var randomBlue = Math.round(Math.random()*255)
    //         var randomGreen = Math.round(Math.random()*255)
    //         createCanvas(1100, 750)
    //         background(randomRed, randomBlue, randomGreen)
    //     }else {
    //         draw()
    //     }
    // }

function draw()
{    

    clear()
   //Space text
   textSize(100);
   fill(255, 255, 255);
   text(space, 375, 100);
   textFont("Helvetica");
   //Invaders text
   fill(255, 0, 0);
   text(invaders, 300 ,200);
   //play rectangle
   //rectangle (x1,y1,x2,y2)
   fill(255,255,255);
   rect(400, 550, 350, 150);
   fill(0,0,0);
   text(play, 445, 650);

 
  
        clear();
        background(8)
        fill(0, 255, 0)
        rect(shooterXPos, shooterYPOS, 130, 20) //this is the ship
        fill(0, 255, 0)
        noStroke()

        fill(0, 255, 0)
        rect(150, 550, 110, 30)
        rect(380, 550, 110, 30)
        rect(620, 550, 110, 30)
        rect(860, 550, 110, 30)

            


        if (keyIsDown(RIGHT_ARROW)) 
        shooterXPos += 10
            
        if (keyIsDown(LEFT_ARROW)) 
            shooterXPos -= 10
            
        if (keyIsDown(32)){
        bulletArray.push(new Bullet())
        console.log(bulletArray)
                

                
        }
                for (i=0; i<bulletArray.length; i++){
                console.log(i)
                bulletArray[i].move()
                bulletArray[i].draw()
        }
                
        }











    // 














































    var shooterXPos = 500
    var shooterYPOS = 690
    var xbullet = shooterXPos
    var ybullet = shooterYPOS

function Bullet(){
this.x = shooterXPos + 65
this.y = 690
this.draw = function(){
    fill(0, 255, 0)
    stroke("black")
    rect(this.x, this.y, 5, 10)}
this.move = function(){
    this.y = this.y - 10

}
}

bullet = new Bullet()
var bulletArray = [bullet]

var bullet;












