class paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
           density:1.2 
        }
			
		this.x=x;
		this.y=y;
        
		
		this.body=Bodies.circle(x, y, 3, options);
 		World.add(world, this.body);
this.image=loadImage("paper.png");
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			circle(this.x,this.y,3);
			pop()
			
	}

}