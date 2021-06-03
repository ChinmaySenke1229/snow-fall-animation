class Snow {
    constructor(x,y,radius){
        var options = {
            restitution:0.1,
            frictionAir:0.05,
            isStatic: false
        }
  
        this.radius = radius;
        this.image=loadImage("snow.png"); 


        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
        }
  
        display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            noStroke();
            fill(this.color);
            rotate(angle);
            image(this.image,0,0, this.radius*2,this.radius*2);
            pop();
          }
    }