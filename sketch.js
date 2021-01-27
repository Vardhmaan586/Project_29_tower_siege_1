const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand;
var object1,object2,object3,object4,object5;
var object6,object7,object8;
var object9;
var ball;
var img;

function preload(){
    img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
 
    ground = new Ground(250,480,500,10);
    stand = new Ground(250,400,100,10);
    object1 = new Box(210,380,20,20);
    object2 = new Box(230,380,20,20);
    object3 = new Box(250,380,20,20);
    object4 = new Box(270,380,20,20);
    object5 = new Box(290,380,20,20);
    object6 = new Box(230,360,20,20);
    object7 = new Box(250,360,20,20);
    object8 = new Box(270,360,20,20);
    object9 = new Box(250,340,20,20);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    sling = new SlingShot(ball,{x:70, y:400});
}

function draw(){
     background("black")

    Engine.update(engine);

    imageMode(CENTER);
    image(img,ball.position.x,ball.position.y,40,40);

    ground.display();
    stand.display();
    object1.display();
    object2.display();
    object3.display();
    object4.display();
    object5.display();
    object6.display();
    object7.display();
    object8.display();
    object9.display();
    sling.display();
    //ball.display();
   

    textSize(20);
    fill("white");
    stroke("purple");
    text("Drag the Hexagonal Stone and Release it,",40,180);
    text("to Launch Towards the Block",100,220)
}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}