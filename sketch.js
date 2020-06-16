const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1;
var ground;
var paper1;
var backgroundImg;

function preload()
{
 
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
  world = engine.world;
  
	ground = new Ground(width/2,670,width,20);
  paper1 = new Paper(200,450,70);
  dustbin1 = new Dustbin(1200,600);
	Engine.run(engine);
}

function draw() {
  background("white");
  rectMode(CENTER);
  dustbin1.display();
  ground.display();
  paper1.display();
  drawSprites(); 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
  }
}