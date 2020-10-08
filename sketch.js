const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block3, block2,block1, block4, block5, block6, block7;

var hexagon, slingshot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);
 

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  

  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);


  block5 = new Block(450,235,30,40);

  var ground_options ={
    isStatic: true
}
  log1= Bodies.rectangle(400,250,160,PI/2,ground_options);
  World.add(world,log1);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block9 = new Block(390,155,30,40);
  block8 = new Block(420,195,30,40);
  hexagon = new Hexagon(200,200,50);
  World.add(world,hexagon);
  
  slingshot = new SlingShot(hexagon.body,{x:200, y:100});
}


function draw() {
  background("blue");  
  Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
   
    block3.display();
    block4.display();
    block8.display(); 
    block6.display();
    block7.display();
    block5.display();
    block9.display();
 

    hexagon.display();
   
    
    slingshot.display();    
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
      slingshot.fly();
      
  }

  function keyPressed(){
    if(keyCode === 32 ){
      
       slingshot.attach(hexagon.body);
      
    }
}

