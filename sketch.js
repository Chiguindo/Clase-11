
var trex ,trex_running, trex_collided;
var ground, groundImage;

function preload(){

    trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundImage=loadImage("ground2.png");
    trex_collide=loadImage("trex_collided.png");
  

}

function setup(){
  createCanvas(600,200)
  
    ground=createSprite(200, 180, 400, 20);
    ground.addImage(groundImage);

  //crear sprite de Trex

    trex=createSprite(50, 160, 20, 50);
    trex.addAnimation("running",trex_running);
    trex.scale=0.5;
}

function draw(){
  background("white");
  if(keyDown("space")){

    trex.velocityY=-10;

  }

trex.collide(ground);

  trex.velocityY=trex.velocityY+0.5;
  drawSprites();

}
