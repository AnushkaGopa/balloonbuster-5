var backgroundImage,background;

var redballoon, greenballoon, pinkballoon, blueballoon, bow, arrow;

var redballoonImage, blueballoonImage, GreenballoonImage, PinkballoonImge, ArrowImage, bowImage;

var score;

var redB, pinkB, greenB, blueB, arrowGroup;



function preload(){
 
 
 
  backgroundImage=loadImage("background0.png");
  redballoonImage = loadImage("red_balloon0.png");
  bowImage=loadImage("bow0.png");
  blueballoonImage= loadImage("blue_balloon0.png");
  PinkballoonImage=loadImage("pink_balloon0.png");
  GreenballoonImage = loadImage("green_balloon0.png");
  ArrowImage=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 400);
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  bow = createSprite (530,300,20,20);
  bow.addImage(bowImage);
  bow.scale = 1;
  
  
  score = 0;
  
  
  redB = createGroup();
  pinkB = createGroup();
  blueB = createGroup();
  greenB = createGroup();
  arrowGroup = createGroup();
  

  
}
  
  function redballoon(){
   var red=createSprite(0,Math.round(random(20,370)),10,10);
   red.addImage(redballoonImage);
   red.velocityX = 3;
   red.lifetime=150;
   red.scale=0.1;
   return red;
   redB.add(red);
 }
  
 function pinkballoon(){
   var pink=createSprite(0,Math.round(random(20,370)),10,10);
   pink.addImage(PinkballoonImage);
   pink.velocityX = 3;
   pink.lifetime=150;
   pink.scale=1.2;
   return pink;
   pinkB.add(pink);
  }
  
  function blueballoon(){
   var  blue=createSprite(0,Math.round(random(20,370)),10,10);
   blue.addImage(blueballoonImage);
   blue.velocityX = 3;
   blue.lifetime=150;
   blue.scale=0.1;
   return blue;
   blueB.add(blue);
 }
 
  function greenballoon(){
   var green=createSprite(0,Math.round(random(20,370)),10,10);
   green.addImage(GreenballoonImage);
   green.velocityX = 3;
   green.lifetime=150;
   green.scale=0.1;
   return green;
   greenB.add(green);
   }


   

function draw() {
  //moving background
   background.velocityX = -3;
  //Resetting the background
  if (background.x < 0){
      background.x = background.width/2;
    } 
  
  bow.y=World.mouseY
  
 
  if (frameCount % 80 === 0) {
    
    var rand = Math.round(random(1,4));
    //console.log(rand);
    switch(rand) {
      case 1: redballoon();
              break;
      case 2: pinkballoon();
              break;
      case 3: greenballoon();
              break;
      case 4: blueballoon();
              break;
      default: break;
      }

    }
   
  if(keyDown("Up_arrow")){
    bow.velocityY=-5
    }
  
     
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  
  drawSprites();
  
  text("score: "+score,270,30)
  
  }
  
  function createArrow(){
  arrow=createSprite(360,100,5,10);
  arrow.velocityX=-6
  arrow.scale=0.3;
  arrowGroup.add(arrow);
  return arrow;
  }  


