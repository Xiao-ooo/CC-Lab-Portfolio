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

  // Adjusting fonts and visibility
  let textPoints = myFont.textToPoints(word, x - 200, y + 50, width / 4, { sampleFactor: 0.2 });

  // Store each point using a for loop and push
  for (let i = 0; i < textPoints.length; i++) {
    let p = textPoints[i];
    let pt = new Point(p.x, p.y, i); 
    points.push(pt);
  }
}

function draw() {
  background(13, 53, 82);

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

    //the base color for each points [random]
    this.baseColor = color(random(255), random(255), random(255)); 
  }

  update(time) {
    // Sin waves to add movement to yOffset & xOffset
    this.yOffset = sin(time + this.index * 0.5) * 2;
    this.xOffset = sin(time + this.index * 1) * 2;  
  }

  display() {
    //calling new funcitons for duplicates of the points which sets them more tighter and the range is adjusted 
    let numDuplicates = 6; 
    let offsetRange = 5; 

    //loop for the duplicate points [their offsites range is set to randomized]
    for (let i = 0; i < numDuplicates; i++) {
      
      let offsetX = random(-offsetRange, offsetRange);
      let offsetY = random(-offsetRange, offsetRange);
      
      // Blend colors
      let variation = map(i, 0, numDuplicates, 0, 255);
      let colorVariation = lerpColor(this.baseColor, color(255, 255, 255), variation / 255);

      stroke(colorVariation);
      strokeWeight(1);
      point(this.x + offsetX + this.xOffset, this.y + offsetY + this.yOffset);
    }
  }
}
