let myFont;
const theWord = "MOO";
let time = 0;

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    createCanvas(600, 600).parent("sketch-container");
    background(0);
}

function draw(){
   
    let pointArray = myFont.textToPoints(theWord, 150, 100, 100, {sampleFactor: 0.2});

    // delta time
    time += 0.05;

    // for Loop of point array
    for (let i = 0; i < pointArray.length; i++) {
        // sin to animate the waves [ 5 for little waves]
        let yOffset = sin(time + i * 0.5) * 5; 

        fill(255, 0, 0); 

        circle(pointArray[i].x, pointArray[i].y + yOffset, 5);
    }
}
