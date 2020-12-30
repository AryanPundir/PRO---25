
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustBin1,dustBin2 , dustBin3;
var ground1
var paper1
var image1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1= new Ground(400,670,800,20);
	dustBin1= new DustBin(650,650,100,20)
	dustBin2= new DustBin(600,620,20,80)
	dustBin3= new DustBin(700,620,20,80)
paper1= new Paper(100,647,40)
image1= new DustBinImage(650,605,133,133)

var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
	Matter.Render.run(render);

}


function draw() {
	background("white");
	
	paper1.display();
	

	
 
  rectMode(CENTER);
  
  ground1.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  image1.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Body.applyForce(paper1.body,paper1.body.position,{x:238, y:-238});
	}
	
}



