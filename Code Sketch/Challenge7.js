let myFont;
const theWord = "WAA";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    createCanvas(500, 250).parent("sketch-container");
    fill(191, 240, 180); 
    noStroke();
}

function draw(){
    background(0);
   
    let pointArray = myFont.textToPoints(theWord, 10, 180, 195, {sampleFactor: 0.17});


    // for Loop of point array
    for (let i = 0; i < pointArray.length; i++) {

        const xPos = pointArray[i].x;
        const yPos = pointArray[i].y;

        const distance = dist(xPos, yPos, mouseX, mouseY);

        let pointSize = map(distance, 0, 100, 50, 5, true);

        circle(xPos, yPos, pointSize);
    }
}
