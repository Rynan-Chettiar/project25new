class Dustbin
{
constructor(x,y,width,height)
    {
        var options= 
        { 
          isStatic:true, 
          friction:0.3,
          density:1.2
       } 
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image= loadImage("dustbingreen.png")
        World.add(world,this.body); 
    }
    display()
    {
   
      image(this.image, this.body.position.x, this.body.position.y, 200, 300)

     
      
}
}