//Create the background of the game by using image Iss.png
//Load the images of brushing,eating,exercising,moving,drinking,sleeping,bathing
var bgIMG
var AstroBrushImg
var AstroEatImg
var AstroExerImg
var AstroMoveImg
var AstroDrinkImg
var AstroSleepImg
var AstroBathImg
var Astronaut
var edges

function preload()
{
bgIMG=loadImage("images/iss.png")
AstroBrushImg=loadImage("images/brush.png")
AstroEatImg=loadAnimation("images/eat1.png","images/eat2.png")
AstroExerImg=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
AstroMoveImg=loadAnimation("images/move1.png","images/move2.png")
AstroDrinkImg=loadAnimation("images/drink1.png","images/drink2.png")
AstroSleepImg=loadImage("images/sleep.png")
AstroBathImg=loadAnimation("images/bath1.png","images/bath2.png")

}



function setup()
{
 createCanvas(600,400)
 Astronaut=createSprite(300,230,10,10)
 Astronaut.addAnimation('Sleeping',AstroSleepImg)
 Astronaut.scale=0.1
}






function draw()
{


 background(bgIMG) 
drawSprites()

textSize(20)
fill('white')
text('Instructions',20,35)
textSize(15)
text('up Arrow=Brushing',20,55)
text('down Arrow=exercising',20,70)
text('left Arrow=eating',20,85)
text('right Arrow=bathing',20,100)
text('M Key=Moving',20,115)
text('N Key=Drinking',20,130)
edges=createEdgeSprites()
Astronaut.bounceOff(edges)
if(keyDown(UP_ARROW))
{
Astronaut.addAnimation('brushing',AstroBrushImg)
Astronaut.changeAnimation('brushing')
Astronaut.y=350
Astronaut.velocityX=0
Astronaut.velocityY=0
}

if(keyDown(DOWN_ARROW))
{
Astronaut.addAnimation('exercising',AstroExerImg)
Astronaut.changeAnimation('exercising')
Astronaut.y=350
Astronaut.velocityX=0
Astronaut.velocityY=0
}


if(keyDown(LEFT_ARROW))
{
Astronaut.addAnimation('eating',AstroEatImg)
Astronaut.changeAnimation('eating')
Astronaut.x=150
Astronaut.y=350
Astronaut.velocityX=0.5
Astronaut.velocityY=0.5
}
if(keyDown(RIGHT_ARROW))
{
Astronaut.addAnimation('bathing',AstroBathImg)
Astronaut.changeAnimation('bathing')
Astronaut.y=300
Astronaut.velocityX=0
Astronaut.velocityY=0
}

if(keyDown("M"))
{
Astronaut.addAnimation('moving',AstroMoveImg)
Astronaut.changeAnimation('moving')

Astronaut.velocityX=1
Astronaut.velocityY=1
}

if(keyDown("N"))
{
Astronaut.addAnimation('drinking',AstroDrinkImg)
Astronaut.changeAnimation('drinking')
Astronaut.y=350
Astronaut.velocityX=0
Astronaut.velocityY=0
}
}

  



