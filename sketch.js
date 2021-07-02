
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball1 
var bin,bin1,bin2
var ground
var launch


function setup() {
	createCanvas(700, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	ball= new Ball(100,100,40);
  
  bin=new Dustbin(585,650,10,70);
 
  
  ground=new Ground(0,700,10000,40);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  bin.display()
 
  
  keyPressed();
 
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW  ){
	
Matter.Body.applyForce(ball.body,ball.body.position,{x:600,y:-85});


}
}






