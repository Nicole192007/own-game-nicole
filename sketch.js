var score = 0;

var jet,earthbg,missile,asteroid1,asteroid2;
  
var jetImg,missileImg,earthbgImg,asteroid1Img,asteroid2Img;
 
var asteroid1Group,asteroid2Group;

var gameState=1
var life =5;
var score=0;

function preload(){
 jetImg = loadImage("fighter jet.png")
 earthImg = loadImage("earth.png")
 missileImg = loadImage("missileImg.png")
 earthbgImg = loadImage("space bg2.jpg")
 asteroid1Img = loadImage("asteroid1.png")
 asteroid2Img = loadImage("asteroid2.png")
 
}

function setup() {
  createCanvas(1500,750);
  jet= createSprite(1400, height/6, 50,50);
  jet.addImage(jetImg)
  jet.scale=0.4


  earth= createSprite(700,800, 10,50 )
  earth.addImage(earthImg)
  earth.scale=1.9

  asteroid1Group = createGroup()
  asteroid2Group = createGroup()
  

  heading= createElement("h1");
  scoreboard= createElement("h1");

  
}

function draw() {
  background(earthbgImg);
  
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:white'); 
  scoreboard.position(width-200,20)

  if(gameState===1){  
    jet.y= mouseY
    if (frameCount % 80 === 0) {
      asteroid1Group();
    }

    if (frameCount % 100 === 0) {
      asteroid2Group();
    }

    if(keyDown("space")){
      shootMissile();
    }
    
    if(asteroid1Group.istouching(missile)){
      asteroid1Group.destroyEach()
    }

   //// if(asteroid2Group.istouching(missile)){
   //   asteroidCollision(asteroid2Group);
   // }  

  //  if (asteroid1Group.istouching(earth)){
  ///  Gameover(asteroid1Group);
//   }
    
  ////  if (asteroid2Group.istouching(earth)) {
   /// Gameover(asteroid2Group);
   // }
    


  drawSprites();
}
function asteroid1Group(){
  asteroid1 = createSprite(random(400,800),random(20,500),40,40);
  asteroid1.addImage(asteroid1Img);
  asteroid1.scale = 0.1;
  asteroid1.velocityY = 5;
  asteroid1.lifetime = 400;
  //asteroid1Group.add(asteroid1)
  }

  function asteroid2Group(){
    asteroid2 = createSprite(random(400,800),random(20,500),40,40);
    asteroid2.addImage(asteroid2Img);
    asteroid2.scale = 0.1;
    asteroid2.velocityY = 5;
    asteroid2.lifetime = 400;
    //asteroid2Group.add(asteroid2)
    }

    function shootMissile(){
      missile= createSprite(1300, height/3, 50,50 )
      missile.y= jet.y-3
      missile.addImage(missileImg)
      missile.scale=0.12
      missile.velocityX= -7
     // missileGroup.add(missile)
    }

    function asteroidCollision(asteroidGroup){
      if (life > 0) {
         score=score+1;
      }
  
      missileGroup.destroyEach()
      asteroidGroup.destroyEach()
  }
  function Gameover(asteroidGroup){
  
    life=life-1;
    asteroidGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
      swal({
        title: `Game Over`,
        text: "Oops you lost the game....!!!",
        text: "Your Score is " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
    }
  
}
}