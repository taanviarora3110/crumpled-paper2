
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject,paperImg;
var world;

function preload(){
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(this.x,this.y,radius);
	paperObject.addImage(paperImg);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperObject.display();
paperImg.dipslay();
  groundObject.display();
  dustbinObj.display();
keyPressed();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}
