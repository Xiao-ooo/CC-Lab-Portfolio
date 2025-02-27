let capture;

function setup() {
    createCanvas(600, 600).parent("sketch-container");

  capture = createCapture(VIDEO, {flipped:true});

  capture.hide();

  noStroke();
}

function draw() {

  capture.loadPixels();

  for(let i = 0; i < 10000; i++) {
    drawRandomPoint();
  }
}

// before using this, make sure that the appropriate pixel array has been loaded in this draw cycle
function getColorFromPixelArray(pixelArray, x, y, w) {
  const index = (x + y * w) * 4;
  const r = pixelArray[index];
  const g = pixelArray[index + 1];
  const b = pixelArray[index + 2];
  const a = pixelArray[index + 3];

  return color(r, g, b, a);
}

function drawRandomPoint() {
  let xPos = floor(random(0, capture.width));
  let yPos = floor(random(0, capture.height));

  let col = getColorFromPixelArray(capture.pixels, xPos, yPos, capture.width);

  fill(col);
  circle(xPos, yPos, 5);
}







// let capture;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   capture = createCapture(VIDEO,{ flipped:true });
//   capture.hide();
  
//   noStroke();
// }

// function draw() {
//   background(0);

//     capture.loadPixels();

//   // change the stepSize for higher resolution
//   drawPoints(capture.width, capture.height, 10);




// }

// function getColorFromPixelArray(pixelArray, x, y, w){

//     const index = (x + y * w) * 4;
//     const r = pixelArray [index];
//     const g = pixelArray [index + 1];
//     const b = pixelArray [index + 2];
//     const a = pixelArray [index + 2];

//     return color(r, g, b, a);


// }


// // draws each circle by using get() on the capture
// function drawPoints(w, h, stepSize) {
  
//   for (let x = 0; x < w; x += stepSize) {
//     for (let y = 0; y < h; y += stepSize) {

//         let col = getColorFromPixelArray(capture.pixels, x, y, capture.width);

//         fill(col);
//         square(x, y, stepSize);
//     }
//   }
// }
