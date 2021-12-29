const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,Ground;
var runner,runnerImg;
var ice=[];
var maxSnow=10;

function preload(){
  bg=loadImage("snow2.jpg");
  Ground=loadImage("ground.PNG");
  runnerImg=loadAnimation("sc1.PNG","sc2.PNG","sc3.PNG")
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  


ground=createSprite(650,670);
ground.addImage(Ground);
ground.scale=3.2;
ground.velocityX=10;
 
runner=createSprite(1200,190);
runner.addAnimation("runner",runnerImg)
runner.scale=1;
runner.velocityX=-1.4;
runner.setCollider("rectangle",15, -20,100,150) 

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  runner.collide(ground);

  if(ground.x > 600){
    ground.x=530;
  }

 if(runner.x < -200){
   runner.x=1200;
 }

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY = runner.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    } 
     
    


ground.display();

  
  drawSprites();

}