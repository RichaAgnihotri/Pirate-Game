class Tower{
    constructor(x, y, width, height){
        var tower_options = {
            isStatic: true,
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/tower.png");
        this.body = Bodies.rectangle(x, y, this.width, this.height, tower_options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        stroke(255);
        pop();
    }
}