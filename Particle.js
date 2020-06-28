class Particle {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.5,
          'density':1.0
          
      }
      
      this.body=Bodies.circle(x, y,radius,options);
      this.radius=20
this.color=color(random(0,255),random(0,255));
World.add(world,this.body)


this.particles=[]
    }
     
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      
      push();
      
      
      translate(pos.x, pos.y);
      ellipse(0,0,this.radius,this.radius);
      fill(this.color);
      pop();
      
    }
    
}



  