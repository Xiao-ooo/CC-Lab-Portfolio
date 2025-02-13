let myFont;
const ourWord = "MOO";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    // Create canvas and set it inside sketch-container div
    createCanvas(600, 600).parent("sketch-container");
    background(0);
    //textAlign(0, 300);  // Align text to the center
}

function draw(){
    // Clear the background on each frame
    background(0);

    // Set a larger font size
    let fontSize = 150;  // Larger font size
    let pointArray = myFont.textToPoints(ourWord, width / 2 - fontSize / 2, height / 2 + fontSize / 4, fontSize, {sampleFactor: 0.2});

    // Find the top and bottom of the bounding box
    let minY = Infinity;
    let maxY = -Infinity;

    // Loop through pointArray to find the min and max y values
    for (let i = 0; i < pointArray.length; i++) {
        minY = min(minY, pointArray[i].y);
        maxY = max(maxY, pointArray[i].y);
    }

    // Now loop through the points and draw them with dynamic size and color
    for (let i = 0; i < pointArray.length; i++) {
        let y = pointArray[i].y;  // Get the y position of each point
        
        // Map the y position to a size (smaller at top, larger at bottom)
        let size = map(y, minY, maxY, 1, 10);  // Top points are small, bottom points are large

        // Map the y position to a color from red to yellow (0,255,0 is yellow)
        let redValue = map(y, minY, maxY, 255, 255); // Constant red (255)
        let greenValue = map(y, minY, maxY, 0, 255); // Green increases from top to bottom
        let blueValue = 0; // Blue stays constant at 0

        // Set the color gradient from red to yellow
        fill(redValue, greenValue, blueValue);

        // Draw a circle at the point's position
        ellipse(pointArray[i].x, pointArray[i].y, size, size);
    }
}
