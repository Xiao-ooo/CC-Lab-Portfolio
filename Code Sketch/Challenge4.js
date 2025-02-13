
let myFont;

const ourWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}


function setup(){
    //Canvas 2
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

        if (i > 10){
            size = 5;
        } else {
            size = 10;
        }

        fill (random(0, 255), random(0, 255), random(0, 255));

        square(pointArray[i].x, pointArray[i].y, size);

    }
}

