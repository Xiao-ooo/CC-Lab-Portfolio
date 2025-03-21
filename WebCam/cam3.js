
function setup() {

  createCanvas(600, 600).parent("sketch-container");

  myVectorBall = new VectorBall(100, 300, 10 , -10);

}


function draw() {

  background(myVectorBall.velocity.mag() * 7, 0, 0);
  noStroke();

  myVectorBall.update();
  myVectorBall.display();

}


class VectorBall{

  constructor(x, y, velX, velY){

    this.position = new p5.Vector(x, y);
    this.velocity = new p5.Vector(velX, velY);

    this.gravity = new p5.Vector(0, 0.5);
  }

  update(){

    this.velocity.add(this.gravity);

    this.position.add(this.velocity);

  }

  display(){

    fill(247, 223, 156);

    circle(this.position.x, this.position.y, 30);

  }

}