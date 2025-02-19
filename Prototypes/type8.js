let myFont;
let textPoints;

let myCustomPoints = [];

function preload(){
    myFont = loadFont("../comicSans.ttf");
}


function setup() {

    textPoints = myFont.textToPoints("YAA", 10, 170, 185, {sampleFactor: 0.2});

    for (let i = 0; i < textPoints.length; i++){
        myCustomPoints.push (new CustomPoint(textPoints[i].x, (textPoints[i].y)));
    }

    createCanvas(400, 250).parent("sketch-container");
    textSize(50);
    noStroke(0);
}


function draw(){
    background(0, 0, 0, 10);

    for (let i = 0; i < myCustomPoints.length; i++){

        myCustomPoints[i].update();
        myCustomPoints[i].display();

    }

}


class CustomPoint{

    constructor(xPos, yPos){
        this.r = random (0, 255);
        this.g = random (0, 255);
        this.b = random (0, 255);

        this.x = xPos;
        this.y = yPos;

        this.originalY = this.y;

        this.size = 5;

        this.timer = 0;

        this.blinkTime = random(0.5, 1.5);

        this.on = true;
        this.partnerPoint = null;

        this.fallTimer = 0;
        this.timeToFall = random(3, 4.73);

        }

        assignPartnerPoint(){
            this.partnerpoint = random(myCustomPoints);
        }

    update(){
        this.timer += deltaTime / 1000;
        this.fallTimer += deltaTime / 1000;

        if (this.timer >= this.blinkTime){

            this.on = !this.on;
            this.timer = 0;

        }

        if (this.fallTimer >= this.timeToFall){
            this.falling = true;
        }
        if (this.falling){
            this.y += 2.5;

            if (this.y > height + this.size) {
                this.y = this.originalY;
                this.fallTimer = 0;
                this.falling = false;
            }
        }

    }

    display(){

        if (this.on){

        fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.size);

        }

    }
}