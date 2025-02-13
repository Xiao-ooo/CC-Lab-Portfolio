
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
   
    pointArray = 

        //Points are objects and they are like pen tools in PS
            //Sample Factors are resolution correctors and uses brackets {} and collins :
        myFont.textToPoints(ourWord, 20, 100, 100, {sampleFactor: 0.2});



    for ( let i = 0; i < pointArray.length; i++) {
        let size = 0;

        //Using MAP to set ranges and change the color from dark to light shades
         let r = 0;
         let g = map(i, 260, pointArray.length, 5, 0);
         let b = 0;

         fill(r, g, b);

        circle(pointArray[i].x, pointArray[i].y, 5);

    }
}

