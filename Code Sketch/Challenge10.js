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

 image(capture, 0, 0);

  if (!positions) return;

  // fill(0);
  noStroke();

  drawMouth();

}


function drawMouth() {
  const topXPos = capture.width - positions[60][0];
  const topYPos = positions[60][1];

  const botXPos = capture.width - positions[57][0];
  const botYPos = positions[57][1];

  const distance = dist(topXPos, topYPos, botXPos, botYPos);

  const mappedSize = map(distance, 0, 16, 5, 40, true);

  if(mappedSize > 35){
    textAlign(CENTER, CENTER);
    textSize(300);
    text("🤬", botXPos, botYPos);
  }

  // console.log(floor(distance));
  //circle(botXPos, botYPos, mappedSize);

}