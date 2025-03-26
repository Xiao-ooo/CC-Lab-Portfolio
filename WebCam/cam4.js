
//POLAR COORDINATES :
let capture;

let captureCreated = false;
let drawingActive = true;

let zoomFactor = 10; 

function setup() {

  createCanvas(600, 600).parent("sketch-container");

  capture = createCapture(VIDEO, {flipped: true}, onCaptureCreated);
  capture.hide();

  noStroke();

}

function onCaptureCreated() {

  captureCreated = true;

}

function draw() {
  if (!captureCreated) return;

  capture.loadPixels();
  
  if (drawingActive) {

    // Draw random points with polar coordinate transformations for every 10000
    for (let i = 0; i < 10000; i++) {

      drawIllusionaryPoint();

    }

  }
}

function getColorFromPixelArray(pixelArray, x, y, w) {

  const index = (x + y * w) * 4;
  const r = pixelArray[index];
  const g = pixelArray[index + 1];
  const b = pixelArray[index + 2];
  const a = pixelArray[index + 3];

  return color(r, g, b, a);
}

function drawIllusionaryPoint() {

  let xPos = floor(random(capture.width));
  let yPos = floor(random(capture.height));

  let col = getColorFromPixelArray(capture.pixels, xPos, yPos, capture.width);
  let r = dist(xPos, yPos, width / 2, height / 2);
  
        // Using atan2 to convert the points to polar coordinatesd [theta = 0] and
        // add movement center radius and angle [calculated through framecounts and sin / cos [i adjusted 100 makes it more tight waves]]

        //x = r * cos(θ)
        //y = r * sin(θ)

  let theta = atan2(yPos - height / 2, xPos - width / 2);
  r += sin(frameCount * 0.01 + r * 0.1) * 80; 

  //[bigger value makes it go in circular waves [ex. 1] but if its decreased to smaller value its not as circular wavy]
        theta += cos(frameCount * 0.01 + r * 0.1) * 0.5; 

  //framecount speed [how fast it shows]
  let scaleFactor = map(sin(frameCount * 0.02 + r), -100, 100, 0.5, 1);
  let scaledRadius = r * scaleFactor * zoomFactor; 

  // New points are calculated by multiplying cos / sin to the previous function and this will Convert the points to Cartesian coordinates
  //r = sqrt(x^2 + y^2)  
  //θ = atan2(y, x) 
    let newX = cos(theta) * scaledRadius + width / 2;
    let newY = sin(theta) * scaledRadius + height / 2;

  // fading playing around with transparency [a]
  let alpha = map(sin(frameCount * 0.05 + r), -1, 1, 50, 255);
  
  fill(col.levels[0], col.levels[1], col.levels[2], alpha);

  square(newX, newY, 3);
}

// When mouse is pressed, the effect of the swirl appears and zooms in 
function mousePressed() {

  // Zoom in at 2 [default is 1 so when it pressed it switches to 2]
  zoomFactor = zoomFactor === 1 ? 2 : 1; 

}
