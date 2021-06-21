const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,Rubber1,iron1,stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Rubber1=new Rubber(500,200,30);
    iron1= new Iron(500,200,400,100);
    stone1=new Stone(200,100,200,300);



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Rubber1.display();
    iron1.display();
    stone1.display();

    
 
}