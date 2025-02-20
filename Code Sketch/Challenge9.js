let myFont;
const theWord = "WAA";

function preload(){
    myFont = loadFont("../comicSans.ttf");
}

function setup(){
    createCanvas(500, 250).parent("sketch-container");
    fill(191, 240, 180); 
    noStroke();
    
    rectMode(CENTER);
}

function draw(){
    background(0);
   
    let pointArray = myFont.textToPoints(theWord, 10, 180, 195, {sampleFactor: 0.17});


    // for Loop of point array
    for (let i = 0; i < pointArray.length; i++) {

        const xPos = pointArray[i].x;
        const yPos = pointArray[i].y;

        //const distance = dist(xPos, yPos, mouseX, mouseY);

        // let pointSize = map(distance, 0, 100, 50, 5, true);
        let pointSize = 1;


        let distanceFromMouse = dist(xPos, yPos, mouseX, mouseY);
        
        let mapDistance = map(distanceFromMouse, 10, 250, 40, 5, true);    
    
        // if(d<50) {
        //     let spread = map(d, 0, 600, 600, 0);
        //     this.x = this.X + (this.X - mouseX) * (spread / 100);
        //     this.y
        // }

        circle(xPos, yPos, mapDistance * 0.2);   
        fill(131, 230, 226);

        // circle(xPos, yPos, pointSize);

        // if (distance < 50 ){
        //     square(xPos, yPos, 5);
        //     fill(255);
        // } else {
        //     circle(xPos, yPos, pointSize);
        //     fill(60, 125, 90);
        // }
    }
}


    
// let distanceFromMouse = dist(posX, posY, mouseX, mouseY);
        
// let mapDistance = map(distanceFromMouse, 0, 250, 40, 4, true);    
    
// circle(posX, posY, mapDistance);   