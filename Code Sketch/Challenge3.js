
let myFont;

const ourWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    //Canvas 2
    createCanvas(500, 250).parent("sketch-container");
    noStroke(0);

}

function draw(){
    background(0);
    
        let pointArray = myFont.textToPoints(ourWord, 10, 180, 195, {sampleFactor: 0.17});

        //for loops for points color
        for ( let i = 0; i < pointArray.length; i++) {

        //2 map to switch colors [i did red to yellow]
        let r = map(i, 0, pointArray.length, 130, 200); 
        let g = 0;
        let b = map(i, 0, pointArray.length, 20, 150); 

        fill(r, g, b);

        circle(pointArray[i].x, pointArray[i].y, 5);

    }
}

