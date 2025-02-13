let myFont;

const ourWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){

    createCanvas(600, 600).parent("sketch-container");
    background(0);
}

function draw(){
    background(0);
    
    let pointArray = myFont.textToPoints(ourWord, 20, 100, 100, {sampleFactor: 0.2});

    // Loop 
    for (let i = 0; i < pointArray.length; i++) {

        let r = map(i, 0, pointArray.length, 139, 255); 
        let g = map(i, 0, pointArray.length, 0, 255);   
        let b = 0; 

        fill(r, g, b);

        // modulo splits every other shape into pattern [2]
        if (i % 2 === 0) {
            circle(pointArray[i].x, pointArray[i].y, 5);
        } else {
            square(pointArray[i].x - 5, pointArray[i].y - 5, 5);
        }
    }
}
