class Ball
{
    constructor(x,y,radius){
        var options= {
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.2

        }
        this.body   = Bodies.circle(x, y, radius, options, 100);
        this.radius = radius;
        this.x= x;
        this.y =y;
       this.image=loadImage("ball.png")
          
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
      
        image(this.image,0,0, this.radius);
        pop();
    }
}