class Plinko {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          'density':5
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body)

    }
     
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      push();
      translate(pos.x, pos.y);
      ellipse(0,0,this.radius,this.radius);
      fill("yellow");
      pop();
      
    }
    
}







  