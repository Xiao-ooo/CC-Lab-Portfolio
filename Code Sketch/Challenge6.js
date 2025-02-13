let myFont;
const theWord = "SOS";
let time = 0;

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    createCanvas(500, 250).parent("sketch-container");
    background(0);
}

function draw(){
   
    let pointArray = myFont.textToPoints(theWord, 10, 180, 195, {sampleFactor: 0.17});

    // delta time
    time += 0.05;

    // for Loop of point array
    for (let i = 0; i < pointArray.length; i++) {
        // sin to animate the waves [ 2 for little waves]
        let yOffset = sin(time + i * 0.4) * 2; 

        fill(252, 141, 61); 

        circle(pointArray[i].x, pointArray[i].y + yOffset, 5);
    }
}
