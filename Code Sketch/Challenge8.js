// let myFont;
// const word = "GIAO";

// function preload(){
//     myFont = loadFont("../comicSans.ttf");
// }

// function setup(){
//     createCanvas(500, 250).parent("sketch-container");
//     fill(191, 240, 180); 
//     noStroke();

//     rectMode(CENTER);

// }

// function draw(){
//     background(0);
   
//     let pointArray = myFont.textToPoints(word, 10, 180, 175, {sampleFactor: 0.17});


//     // for Loop of point array
//     for (let i = 0; i < pointArray.length; i++) {

//         const xPos = pointArray[i].x;
//         const yPos = pointArray[i].y;
//         const distance = dist(xPos, yPos, mouseX, mouseY);

//         let pointSize = 5;

//         if (distance < 50 ){

//             square(xPos, yPos, 5);
//             fill(255);

//         } else {

//             circle(xPos, yPos, pointSize);
//             fill(164, 81, 252);

//         }

//     }
// }

let myFont;

let textPoints;
let points = [];

let word = "GIAO";

//The variable to move the points [smaller the number slower it moves]
let moving = 0.005; 

function preload() {
    myFont = loadFont("../comicSans.ttf");
}

function setup() {
  createCanvas(500, 250).parent("sketch-container");
  let x = width / 2;
  let y = height / 2;

  // textToPoint adjusting point location and visibility 
  textPoints = myFont.textToPoints(word, x - 200, y + 50, width / 3.5, { sampleFactor: 0.1 });

  // Store each point in an object and push it into the points array using a for loop
  for (let i = 0; i < textPoints.length; i++) {
    let p = textPoints[i];
    let pt = new Point(p.x, p.y);
    points.push(pt);
  }
}

function draw() {
  background(0);

  // For loop that runs every frame and updates the class
  for (let i = 0; i < points.length; i++) {
    points[i].update();
    points[i].display();
  }
}

class Point {
    constructor(xPos, yPos) {
      this.x = xPos;
      this.y = yPos;
      this.size = 5;
      this.isSquare = true
    
    }
  
    update() {
       const d= dist(this.x, this.y, mouseX, mouseY);
      
      this.isSquare = d < 50
    
      
    }
  
    display() {
      if(this.isSquare){
        fill (255);
        square(this.x,this.y,7)
      }else{
        fill(164, 81, 252)
        circle(this.x,this.y,7)
      }
    
    }
  }

