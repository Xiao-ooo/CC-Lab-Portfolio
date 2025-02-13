
let myFont;
const theWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}


function setup(){
   
    createCanvas(500, 250).parent("sketch-container");
    background(0);

}


function draw(){

    pointArray = 
        //Points are objects and they are like pen tools in PS
            //Sample Factors are resolution correctors and uses brackets {} and collins :
        myFont.textToPoints(theWord, 10, 180, 190, {sampleFactor: 0.2});

    for ( let i = 0; i < pointArray.length; i++) {
        let size = 0;

        fill (255, 0, 0);

        //Just need to set the size and fill a color, there will be a solid word
        circle(pointArray[i].x, pointArray[i].y, 5);
        

    }
}

