let myFont;
let points = [];

let word = "HOME";
let time = 0;

function preload() {
    myFont = loadFont("../comicSans.ttf");
}

function setup() {
  createCanvas(500, 250).parent("sketch-container");
  let x = width / 2;
  let y = height / 2;

  // adjusting fonts and visibility
  let textPoints = myFont.textToPoints(word, x - 200, y + 50, width / 4, { sampleFactor: 0.2 });

  // Store each point using a for loop and push
  for (let i = 0; i < textPoints.length; i++) {
    let p = textPoints[i];
    let pt = new Point(p.x, p.y, i); 
    points.push(pt);
  }
}

function draw() {
  background(75, 112, 78);

  time += 0.05;

  // For loop that runs every frame and updates the class
  for (let i = 0; i < points.length; i++) {
    points[i].update(time); 
    points[i].display();
  }
}

class Point {
  constructor(x, y, index) {

    this.x = x;
    this.y = y;
    this.index = index;

    //Random colors of greenish and blue yellow
    this.color = color(random(255), 200, random(255)); 
  }

  update(time) {
    // Sin waves to add movements [yOffset]
    this.yOffset = sin(time + this.index * 0.5) * 2;
    //The x makes it wiggle side ways
    this.xOffset = sin(time + this.index * 1) * 2;  
  }

  display() {
    
    stroke(this.color);
    strokeWeight(5);
    point(this.x + this.xOffset, this.y + this.yOffset);
    
  }
}
