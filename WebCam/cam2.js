let capture;
let tracker;
let positions;
let hasInitialized = false;

let noseDrawingLayer;

function setup() {

  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, {flipped: true}, onCaptureCreated);
  capture.hide();
  tracker = new clm.tracker();
  tracker.init();

  noseDrawingLayer = createGraphics(width, height);

}

function onCaptureCreated() {

  capture.size(capture.width, capture.height);
  tracker.start(capture.elt);
  hasInitialized = true;
}

function draw() {
  if (!hasInitialized) return;
  background(0);
  positions = tracker.getCurrentPosition();

  // image(capture, 0, 0);

  if (!positions) return;

  // fill(0);
  noStroke();
  noseDrawingLayer.noStroke();

  drawNose();
  drawLeftEye();
  drawRightEye();
  drawMouth();

  image(noseDrawingLayer, 0, 0);
}

function keyPressed() {
  if (key === " ") {
    clearNoseGraphic();
  }
}

function clearNoseGraphic() {
  noseDrawingLayer.clear();
}

function drawNose() {
  const xPos = capture.width - positions[62][0];
  const yPos = positions[62][1];

  circle(xPos, yPos, 40);
  noseDrawingLayer.circle(xPos, yPos, 40);
}

function drawLeftEye() {
  const xPos = capture.width - positions[27][0];
  const yPos = positions[27][1];

  circle(xPos, yPos, 20);
}

function drawRightEye() {
  const xPos = capture.width - positions[32][0];
  const yPos = positions[32][1];

  circle(xPos, yPos, 20);
}

function drawMouth() {
  const topXPos = capture.width - positions[60][0];
  const topYPos = positions[60][1];

  const botXPos = capture.width - positions[57][0];
  const botYPos = positions[57][1];

  const distance = dist(topXPos, topYPos, botXPos, botYPos);

  const mappedSize = map(distance, 0, 16, 5, 40, true);

  // console.log(floor(distance));


  circle(botXPos, botYPos, mappedSize);
}