const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles=[]
var plinkos=[]



function setup() {
  createCanvas(480,720);
  engine = Engine.create();
    world = engine.world;

    division1 = new Divisions(80,708,10,400);
     division2 = new Divisions(160,708,10,400);
    division3 = new Divisions(240,708,10,400);
    division4 = new Divisions(320,708,10,400);
    division5 = new Divisions(400,708,10,400);
    ground = new Ground(240,715,480,15)
    for ( j = 0; j < 5; j++) {
      for ( i = 0; i < 6 ; i++) {
         x = i * width/5;
       
        y = width / 5+ j * width / 5;
         p = new Plinko(x, y, 20);
        plinkos.push(p);
      }
    }
 }
    



function draw() {
  Engine.update(engine);
  background(25,250,250);  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
      
  ground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()

 
  for(var p=0; p<particles.length; p++){
particles[p].display();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();

 
  }
}