let r = 0;
let g = 0;
let b = 0;

const minSize = 10;
const maxSize = 100;
const minRGB = 0;
const maxRGB = 255;

function setup() {
  createCanvas(400, 400).parent("sketch-container");
}

//Random background color generates when this is trigered
function mousePressed(){
  r = random(minRGB, maxRGB);
  g = random(minRGB, maxRGB);
  b = random(minRGB, maxRGB);
}

function draw(x, y) {
  background(r, g, b);
  noStroke();
  
//Base of Face - keep in center 
  fill(240, 229, 175);
  rectMode(CENTER);
  rect(200, 200, mouseX, mouseY, 80);
  
//Eyeball bg
  fill(77, 63, 33);
  ellipse(150, 200, 100, mouseX);
  ellipse(250, 200, 100, mouseX);
  //eyeball pupil
  fill(43, 28, 17);
  ellipse(150, 200, 80, mouseX);
  ellipse(250, 200,80, mouseX);
  //eyeball highlight
  fill(255, 255, 255);
  ellipse(150, 200, 10, mouseX, mouseY);
  ellipse(250, 200, 10, mouseX, mouseY);
  
//Mouth 
  fill(247, 134, 134);
  ellipse(200, 400, 50, mouseX, mouseY);
  
}