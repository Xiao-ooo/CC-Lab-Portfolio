let myFont;

let textPoints;
let points = [];

let word = "HOME";

//The variable to move the points [smaller the number slower it moves]
let moving = 0.005; 

function preload() {
    myFont = loadFont("../comicSans.ttf");
}

function setup() {
  createCanvas(500, 250).parent("sketch-container");
  let x = width / 2;
  let y = height / 2;

  // textToPoint adjusting point location and visibility 
  textPoints = myFont.textToPoints(word, x - 200, y + 50, width / 4, { sampleFactor: 0.2 });

  // Store each point in an object and push it into the points array using a for loop
  for (let i = 0; i < textPoints.length; i++) {
    let p = textPoints[i];
    let pt = new Point(p.x, p.y);
    points.push(pt);
  }
}

function draw() {
  background(0);

  // For loop that runs every frame and updates the class
  for (let i = 0; i < points.length; i++) {
    points[i].update();
    points[i].display();
  }
}

class Point {
  constructor(x, y) {

    //position font the spread out font points 
    this.x = random(width);  
    this.y = random(height);

    //Position of the fonts after its emerged 
    this.originalX = x;
    this.originalY = y;

    //Random color of text [pastel colors]
    this.color = color(random(200, 255), random(200, 255), random(200, 255)); 
  }

  update() {
    // the movement of the emerging effect slowly moves in 
    this.x += (this.originalX - this.x) * moving;
    this.y += (this.originalY - this.y) * moving;
  }

  display() {

    stroke(this.color);
    strokeWeight(5);
    point(this.x, this.y);

  }
}
