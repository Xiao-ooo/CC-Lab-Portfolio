//Setting a timer for 1 min = 60000
let oneMin = 60000;

//boolean
let bg = false


function setup() {
  createCanvas(600, 600); 
}


//interactions to change the background color gradient pressing anywhere
function mousePressed(){

  let mappedMouseX = map(mouseX, 0, width, 0, 255);
  
  background(mappedMouseX);
  noStroke();

//Simplest 'If' statement replaceing false with explanation mark  
  bg = !bg;

//Shows the console...making sure everything is reading
  console.log('the bg is ' + bg);
}

//Creating the hour glass model
function draw() {

  noStroke();

  push();
  
// If statements - ! equals false 
  if(!bg){
    
    fill(0);
    
  } else if (bg){
    
    fill(255);
    
  }

  pop();
  
  push();
//REPEAT 1 min timer 
  let elapsedTime = millis() % oneMin;

// set functions for color fading and changing - light to dark
  let Base = lerpColor(color('white'), color('black'), elapsedTime / oneMin);
  
  let Sand = lerpColor(color('white'), color('red'), elapsedTime / oneMin);

  pop();
  
  push();
  
//Base of hour glass
  fill(Base);
  triangle(300, 250, 250, 400, 350, 400);
  
//Hour glass red sand
  fill(Sand);
  triangle(300, 350, 250, 400, 350, 400);
  
  pop();
}

