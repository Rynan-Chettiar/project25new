
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	background("white")


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(600, 680, 1200, 20)

	left= new Dustbin(900, 600, 10, 180)
	right= new Dustbin(1100, 600, 10, 180)
	bottom= new Dustbin(1000, 370, 200, 10)

	ball= new Ball(100, 100, 20)

	var render = Render.create({ 
	element: document.body, 
	engine: engine, 
	options: { width: 1600, height: 700, wireframes: false } 
	}); 
	Render.run(render);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  ground.display();
  ball.display();
  bottom.display();
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}

