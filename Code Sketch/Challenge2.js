
let myFont;

const theWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}


function setup(){
 
    createCanvas(500, 250).parent("sketch-container");
    background(0);

    pointArray = 
    //Points are objects and they are like pen tools in PS
        //Sample Factors are resolution correctors and uses brackets {} and collins :
    myFont.textToPoints(theWord, 10, 180, 195, {sampleFactor: 0.2});
    
}


function draw(){
   
    for ( let i = 0; i < pointArray.length; i++) {

        //Using MAP to set ranges and change the color from dark to light shades
         let r = 0;
         let g = map(pointArray[i].x, width, 0, 8, 255);
         let b = 0;

        fill(r, g, b);

        circle(pointArray[i].x, pointArray[i].y, 5);

    }
}

