
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,child,tree,stone,stoneimg,state;
var mangoes = ["1","2","3","4","5","6","7","8","9","10","11"];
var ropes = ["1"];

function preload(){
	
	child = loadImage("1boy.png");
	tree = loadImage("1tree.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-5,width,10);
	stone = new Stone();

	ropes[0] = new Chain(stone.body,{x:205, y:390});

	mangoes[0] = new Mango(680,69,40);
  mangoes[1] = new Mango(785,100,40);
	mangoes[2] = new Mango(800,40,50);
	mangoes[3] = new Mango(585,140,50);
	mangoes[4] = new Mango(590,200,50);
  mangoes[5] = new Mango(700,115,40);
	mangoes[6] = new Mango(675,200,40);
	mangoes[7] = new Mango(795,200,50);
	mangoes[8] = new Mango(900,175,50);
	mangoes[9] = new Mango(870,120,40);
	mangoes[10] = new Mango(850,130,50);
	mangoes[11] = new Mango(590,200,50);
	 

	Engine.run(engine);
}


function draw() {
  background(150);
  

  imageMode(CENTER);
  image(child,250,437.5,150,200);
  image(tree,750,250,450,500);


  ground.display();
  ropes[0].display();
  stone.display();

  mangoes[0].display();
  mangoes[2].display();
  mangoes[1].display();
  mangoes[3].display();
  mangoes[4].display();
  mangoes[5].display();
	mangoes[6].display();
  mangoes[7].display();
	mangoes[8].display();
	mangoes[9].display();
  mangoes[10].display();
	mangoes[11].display();



isTouching(stone,1);
isTouching(stone,2);
isTouching(stone,3);
isTouching(stone,4);
isTouching(stone,5);
isTouching(stone,6);
isTouching(stone,7);
isTouching(stone,8);
isTouching(stone,9);
isTouching(stone,10);
isTouching(stone,11);

  text("x:"+mouseX+"y:"+mouseY,100,50);
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    ropes[0].fly();
}

function isTouching(lstone,num){
  var distance = dist(lstone.body.position.x,lstone.body.position.y,mangoes[num].body.position.x,mangoes[num].body.position.y)
	
	if /*(lstone.body.position.x-mangoes[num].body.position.x <= lstone.body.width/2+mangoes[num].radius/2&&
	mangoes[num].body.position.x-lstone.body.position.x <= lstone.body.width/2+mangoes[num].radius/2 &&
		lstone.body.position.y-mangoes[num].body.position.y <= lstone.body.height/2+mangoes[num].radius/2 &&
		mangoes[num].body.position.y-lstone.body.position.y <= lstone.body.height/2+mangoes[num].radius/2)*/
		(distance <=lstone.radius+mangoes[num].radius)
		{
		console.log(true);
		Matter.Body.setStatic(mangoes[num].body,false);
  } 
  }