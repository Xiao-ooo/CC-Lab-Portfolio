let myFont;
let points = [];
let word = "DESIRE";

let time = 0;

let myCustomPoints = [];

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

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
    background(0, 0, 0, 5);

    //clear();

    // Update and display each point
    for (let i = 0; i < points.length; i++) {
        points[i].update(); 
        points[i].display(); 
    }
}



class Point{

    constructor(xPos, yPos){
        this.r = 10;
        this.g = random (0, 255);
        this.b = random (0, 255);

        this.x = xPos;
        this.y = yPos;

        this.originalY = this.y;

        this.size = 5;
        this.on = true;

        this.fallTimer = 0;
        this.timeToFall = random(3, 4.73);

        }

    update(){
        this.fallTimer += deltaTime / 1000;

        if (this.fallTimer >= this.timeToFall){
            this.falling = true;
        }
        //You can adjust the the falling shades trails and it comes back up
        if (this.falling){
            this.y += 1.5;
            //Help from luca
            if (this.y > height + this.size) {
                this.y = this.originalY;
                this.fallTimer = 0;
                this.falling = false;
            }
        }

    }

    display(){

        if (this.on){
        //the last value makes it more smooth
        fill(this.r, this.g, this.b, 100);
        circle(this.x, this.y, this.size);
        noStroke();

        }

    }
}
