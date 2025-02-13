let myFont;

const ourWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){

    createCanvas(500, 250).parent("sketch-container");
    rectMode(CENTER);
}

function draw(){
    background(0);

    let pointArray = myFont.textToPoints(ourWord, 10, 180, 195, {sampleFactor: 0.17});

    // Loop 
    for (let i = 0; i < pointArray.length; i++) {

        // modulo splits every other shape into pattern [2]
        if (i % 2 === 0) {
            circle(pointArray[i].x, pointArray[i].y, 5);
            fill(183, 237, 197);
        } else {
            square(pointArray[i].x, pointArray[i].y, 5);
            fill(255, 158, 169);
        }
    }
}
