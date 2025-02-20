let myFont;
let points = [];
let word = "DESIRE";

let time = 0;

function preload() {
    myFont = loadFont("../comicSans.ttf");
  }
  
  function setup() {
    createCanvas(500, 250).parent("sketch-container");
    let x = width / 2;
    let y = height / 2;

  // Adjusting fonts and visibility
  let textPoints = myFont.textToPoints(word, x - 210, y + 50, width / 4.5, { sampleFactor: 0.2 });

  // Store each point using a for loop and push
  for (let i = 0; i < textPoints.length; i++) {
    let p = textPoints[i];
    let pt = new Point(p.x, p.y, i); 
    points.push(pt);
  }
}

function draw() {
  background(0); 

  // Slow enough to see the word clearly
  time += 0.02; 

  // Update and display each point
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

    // Set random colors to create the glowing effect
    this.baseColor = color(random(150, 255), random(150, 255), random(150, 255)); 
    this.glowStrength = random(10, 20); // Random strength for each point's glow
  }

  update(time) {
    // Sin and cosine wave movement, can be adjusted for smoothness
    this.xOffset = sin(time + this.x * 0.1) * 15;
    this.yOffset = cos(time + this.y * 0.1) * 3;
  }

  display() {
    // Glowing effect using for loop to adjust the opacity of the colors 
    for (let i = 0; i < this.glowStrength; i++) {
      let alpha = map(i, 0, this.glowStrength, 90, 0); 
      let offset = i * 1; 

      // Draw the glowing points with reduced opacity
      strokeWeight(3);
      stroke(this.baseColor.levels[0], this.baseColor.levels[1], this.baseColor.levels[2], alpha);
      point(this.x + this.xOffset + offset, this.y + this.yOffset + offset); 
    }
  }
}
