const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;

var platform1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var bob1;

var Gamestate = "hold";

function setup() {
  createCanvas(1400,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

platform1 = new Ground(1200,400,300,40);

bob1 = new bob(300,200,30,50);

sling = new string(bob1.body,{x:300,y:100});

block1 = new blocks (1100,350,"blue");
block2 = new blocks (1150,350,"blue");
block3 = new blocks (1200,350,"blue");
block4 = new blocks (1250,350,"blue");
block5 = new blocks (1300,350,"blue");
block6 = new blocks (1150,330,"green");
block7 = new blocks (1200,330,"green");
block8 = new blocks (1250,330,"green");
block9 = new blocks (1170,300,"orange");
block10 = new blocks (1220,300,"orange");
block11 = new blocks (1200,270,"red");


  Engine.run(engine);
}

function draw() {
  background(192); 

    sling.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    bob1.display();

   

   platform1.display();

  


  drawSprites();
}
 
function mouseDragged() {
  if(Gamestate==="hold"){
   Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}
}

function mouseReleased() {
  sling.fly();
  Gamestate = "launched";
}

function keyPressed(){
  if(keyCode===32){
    Body.setPosition(bob1.body,{x:300,y:200});
    sling.attach(bob1.body);
    Gamestate = "hold";
  }
}