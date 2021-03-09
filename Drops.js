class Drops{
    constructor(x,y){
      var options={
          isStatic :false,
        'restitution' : 0.8,
        'friction': 0.1,
        'density' :1.0
      } 
      this.body = Bodies.circle(x,y,options);
      this.x = x;
      this.y=y;
      
      World.add(world,this.body);
      this.drop = [];
    }
    display(){

        ellipseMode(RADIUS);
        ellipse(this.drops.position.x,this.drops.position.y);

        if(this.body.position.y>1000){
            Matter.Body.setPosition(this.body ,{x:random(0,400),y:random(0,400)})
        }
        var maxDrops = 100;

        for( var i=0; i<maxDrops; i++){
            this.drop.push(new createDrops(random(0,400), random(0,400)));
        }

        
    }
}