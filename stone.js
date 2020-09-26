class Stone{
    constructor(){

         var options = {
        
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
    }

    this.body = Bodies.rectangle(205, 390, 25, 20, options);
    this.radius = 40;
    this.width = 25;
    this.height = 20
    this.img = loadImage("1stone.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    fill(100);
    imageMode(CENTER);
    image(this.img,pos.x, pos.y, this.radius, this.radius);
    pop();
  }
}
