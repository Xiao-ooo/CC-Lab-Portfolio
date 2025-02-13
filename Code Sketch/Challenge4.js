let myFont;
const ourWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    
    createCanvas(500, 250).parent("sketch-container");
    background(0);
    
}

function draw(){
    // Clear the background on each frame
    background(0);

    // Change the text size
    let fontSize = 150; 
    let pointArray = myFont.textToPoints(ourWord, 10, 180, 195, {sampleFactor: 0.17});

    // Find the top and bottom of the bounding box
    let minY = Infinity;
    let maxY = -Infinity;

    for (let i = 0; i < pointArray.length; i++) {
        minY = min(minY, pointArray[i].y);
        maxY = max(maxY, pointArray[i].y);
    }

    // for loop for points 
    for (let i = 0; i < pointArray.length; i++) {
        let y = pointArray[i].y;  
        
        // Mapping big and small sizes of circles
        let size = map(y, minY, maxY, 1, 10); 

        // Map colors and fading
        let redValue = map(y, minY, maxY, 255, 255); 
        let greenValue = map(y, minY, maxY, 0, 255); 
        let blueValue = 0; 

        fill(redValue, greenValue, blueValue);

        ellipse(pointArray[i].x, pointArray[i].y, size, size);
    }
}
