//Sleep Date
let daySlept = ["  10/7" + "  10/8" + "  10/9"+ "  10/10" + "  10/11"+ "  10/12"+ "  10/13" + "  10/14"+ "  10/15"+"  10/16"];

//Sleep Hours
let timeSlept = [7.19, 5.44, 7.6, 5.48, 7.6, 7.4, 7.8, 6.15, 9, 6.35];

//Sleep hour data spacings variables 
let circSpacing = 46;
let circPosX = 135;

//X-axis texts spacing variables
let textSpacing = 0;
let textPos = 550;
//Y-axis Hour spacing variables 
let hourSpacing = 46;

const sizeMultiplier = 10;

//Sleep Data for 10 days:
// 10/7 = 7.19hrs;
// 10/8 = 5.44hrs;
// 10/9 = 7.6hrs; 
// 10/10 = 5.48hrs;
// 10/11 = 7.6hrs;
// 10/12 = 7.4hrs;
// 10/13 = 7.8hrs;
// 10/14 = 6.15hrs;
// 10/15 = 9hrs;
// 10/16 = 6.35hrs;

let img;

function setup() {
  createCanvas(600, 600).parent("sketch-container");

//Importing Image
  //CREDIT to 'thezmasher' from freepik.com
    //https://www.freepik.com/premium-vector/pixel-art-style-night-sky-landscape_51381909.html 
  img = loadImage('DataPortraitBackground.avif');

//Map the data so the number is bigger 
  for (let i = 0; i < timeSlept.length; i++) {
    timeSlept[i] = map(timeSlept[i], 4, 10, 50, 600);
  }
  
  console.log(timeSlept)
  
}

function draw() {

//Importing an image as background & changing the opacity - darkness
  background(img, 0.5);
  
  noStroke();
  
//X-Axis & Y-Axis Title + rotation  [push & pop, so the rotation don't roates other functions]
  push();
  
  textSize(30);
  fill(20, 252, 167);
  textFont('Times New Roman');
  
  text("Date", 290, 580);

  //Rotes half of a PI which makes the text turn side way
  rotate(PI/2);
  text("Hours Slept", 200, -40);
  
  pop();

//User declare functions
  makeSleepPlot();
  
  writeDates();
  
  writeHours();
  
}
  
//Creating the plotting gram for the sleeping schedule
function makeSleepPlot(){
  for(let i = 0; i < timeSlept.length; i++){
    
    noStroke();
    fill(random(255), random(255), random(255));
    circle(circPosX + circSpacing * i, timeSlept[i], 20);
    
  } 
}

//Creating the X-Axis data of Dates function
function writeDates(){
//Allows the data to spread out  
  for(let i = 0; i < daySlept.length; i++){
    
    textSize(19);
    fill(20, 252, 167);
    textFont('Times New Roman');
    text(daySlept, 85, textPos + textSpacing * i);
    
  }  
}

//Creating the Y-Axis data of Hours
function writeHours(){
//Hour spacing calculations  
  for(let i = 0; i <= timeSlept.length; i++){
    
    textSize(20);
    fill(20, 252, 167);
    text(i + 2 , 80, hourSpacing * i * 1.64);
    
  }
  
}
