let myFont;
let points = [];
let word = "PAIN";
let time = 0;

function preload() {
    myFont = loadFont("../comicSans.ttf");
}

function setup() {
  createCanvas(500, 250).parent("sketch-container");
  let x = width / 2;
  let y = height / 2;

  // Adjusting fonts and visibility
  let textPoints = myFont.textToPoints(word, x - 200, y + 50, width / 3, { sampleFactor: 0.2 });

  // Store each point using a for loop and push
  for (let i = 0; i < textPoints.length; i++) {
    let p = textPoints[i];
    let pt = new Point(p.x, p.y, i); 
    points.push(pt);
  }
}

function draw() {
  background(250, 250, 62, 10);

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

    //water liquid effect 
    this.baseColor = color(0, 94, 21, 3);
    //variables for smooth movements 
    this.initialX = x; 
    this.initialY = y; 
  }

  update(time) {
    // Sin and cos for wave movements
    this.yOffset = sin(time + this.index * 0.6) * 10;
    this.xOffset = cos(time + this.index * 0.8) * 2;  
    
    // Distortion of the point position 
    this.distortX = sin(time + this.index * 0.3) * 2;
    this.distortY = cos(time + this.index * 0.3) * 2;
    this.randomX = random(-1, 1);
    this.randomY = random(-1, 1);
  }

  display() {

    //More duplicates of the points 
    let numDuplicates = 3; 
    let offsetRange = 3; 

    //for loop to adjust the duplicate points 
    for (let i = 0; i < numDuplicates; i++) {
      let offsetX = random(-offsetRange, offsetRange);
      let offsetY = random(-offsetRange, offsetRange);

      // generates the postion of the new movement [fluid movements]
      let fluidX = this.initialX + this.xOffset + this.distortX + offsetX + this.randomX;
      let fluidY = this.initialY + this.yOffset + this.distortY + offsetY + this.randomY;

      // liquid color effects 
      let alpha = map(sin(time * 0.5 + this.index), -1, 1, 100, 255);
      let colorVariation = color(255, 86, 43, alpha);

      stroke(colorVariation);
      strokeWeight(5);
      point(fluidX, fluidY);
    }
  }
}
