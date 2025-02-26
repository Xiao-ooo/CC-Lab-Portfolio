let myFont;
let textPoints;
let points = [];
let word = "HOME";

// The variable to move the points [smaller the number slower it moves]
let moving = 0.005;
let reachedText = false;

function preload() {
    myFont = loadFont("../comicSans.ttf");
}

function setup() {
    createCanvas(500, 250).parent("sketch-container");
    let x = width / 2;
    let y = height / 2;

    // textToPoint adjusting point location and visibility
    textPoints = myFont.textToPoints(word, x - 200, y + 50, width / 4, { sampleFactor: 0.2 });

    // Store each point in an object and push it into the points array using a for loop
    for (let i = 0; i < textPoints.length; i++) {
        let p = textPoints[i];
        let pt = new Point(p.x, p.y);
        points.push(pt);
    }
}

function draw() {
    background(0, 0, 0, 8);

    let allPointsReached = true;

    // For loop that runs every frame and updates the class
    for (let i = 0; i < points.length; i++) {
        points[i].update();
        points[i].display();

        if (dist(points[i].x, points[i].y, points[i].originalX, points[i].originalY) > 1) {
            allPointsReached = false;
        }
    }

    // add on effect when all points gets back to orginal place
    if (allPointsReached && !reachedText) {
        reachedText = true;
        moving = 0.01; 
    }
}

class Point {
    constructor(x, y) {
        // position font the spread out font points
        this.x = random(width);
        this.y = random(height);

        // Position of the fonts after its emerged
        this.originalX = x;
        this.originalY = y;

        this.color = color(random(255), random(255), random(255));
        this.speed = random(0.002, 0.01);
        this.angle = random(TWO_PI);
        this.radius = random(1, 10);
    }

    update() {

        // the movement of the emerging effect slowly moves in
        this.x += (this.originalX - this.x) * moving;
        this.y += (this.originalY - this.y) * moving;

        // if loop stop rotation if not back in original spot
        if (dist(this.x, this.y, this.originalX, this.originalY) < 2) {
            this.angle += this.speed; 
            this.x += cos(this.angle) * this.radius;
            this.y += sin(this.angle) * this.radius;
        }
    }

    display() {

        //glowing around the original points
        strokeWeight(1.5);
        let alpha = map(sin(frameCount * 0.1), -1, 1, 100, 255); // Fade effect
        stroke(this.color.levels[0], this.color.levels[1], this.color.levels[2], alpha);
        point(this.x, this.y);

        //glowing [adding on top]
        noFill();
        strokeWeight(1.5);
        stroke(255, 255, 204, alpha / 2);
        ellipse(this.x, this.y, 15 + sin(frameCount * 0.05) * 5, 15 + sin(frameCount * 0.05) * 5);
    }
}
