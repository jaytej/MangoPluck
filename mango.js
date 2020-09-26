class Mango{
    constructor(x,y,radius){

         var options = {
        
        isStatic: true,
        restitution: 0,
        friction: 1,
    }

    this.body = Bodies.rectangle(x, y, radius, radius, options);
    this.radius = radius;
    this.img = loadImage("1mango.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    image(this.img,pos.x, pos.y, this.radius, this.radius);
  }
}