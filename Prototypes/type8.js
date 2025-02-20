let myFont;
let points = [];
let word = "DESIRE";
let time = 0;

function preload() {
    myFont = loadFont("../comicSans.ttf"); 
}

function setup() {
    
    createCanvas(500, 250).parent("sketch-container");
    let x = width / 2;
    let y = height / 2;

    // Adjusting fonts and visibility
    let textPoints = myFont.textToPoints(word, x - 210, y + 50, width / 4.5, { sampleFactor: 0.2 });

    // Store each point using a for loop and push to points array
    for (let i = 0; i < textPoints.length; i++) {
        let p = textPoints[i];
        let pt = new Point(p.x, p.y, i); 
        points.push(pt);
    }
}

function draw() {
    background(0);

    time += 0.01;

    // i can adjust the size of how big it is when it expand and shrink here
    let scaleValue = sin(time) * 2 + 1.5; 

    // passing the scales to adjust point size
    for (let i = 0; i < points.length; i++) {
        points[i].update(scaleValue); 
        points[i].display(scaleValue); 
    }
}

class Point {
    constructor(x, y, index) {
        this.initialX = x;
        this.initialY = y;
        this.index = index;
    }

    update(scaleValue) {
        // centers the bouncing of the texts [expanding from center and returning to center]
        let centerX = width / 2;
        let centerY = height / 2;

        // Scale the points based on the distance from the center to make it expand and shrink from the center
        this.x = centerX + (this.initialX - centerX) * scaleValue;
        this.y = centerY + (this.initialY - centerY) * scaleValue;
    }

    display() {

        stroke(90, random(255), 100);
        strokeWeight(5);
        point(this.x, this.y); 
        
    }
}
