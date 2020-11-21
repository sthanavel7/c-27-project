class Bob{
    constructor(x){
        var options={
            restitution:1,
            friction:0.3,
            density:0.8,
        }
        this.body = Bodies.circle(x,300,25,options);   //x,y,r
        
        World.add(world,this.body);
    }

    display(){
        fill("yellow")
        ellipse(this.body.position.x,this.body.position.y,50,50);// x,y,d,d  
    }
}
