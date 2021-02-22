class Ball
{
constructor(x,y,r)
    {
        var options= 
        {  
          friction:0.3,
          density:1.2,
          restitution:0.04
       } 
        this.body=Bodies.circle(x,y,r,options);
        this.r= r;
        World.add(world,this.body); 

        this.image= loadImage("paper.png")
    }
    display()
    {
    console.log("hi")
      //ellipseMode(CENTER);
      
      image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)

     
      
}
}