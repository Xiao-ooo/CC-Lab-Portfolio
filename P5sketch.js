let runDistance = 0;
let speed;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
speed = 0.05
runDistance += deltaTime * speed; 
//Setting the timer of how long it runs 
  if(runDistance > 1 * width/200){
    runDistance = 0
  }
  
  rectMode(CENTER);
  background(0);

//the amount of rectangles and the number of loop it runs
    for (let i = 0; i <= 6; i++){
      for (let j = 0; j <= 7; j++){
        let remainder = (i+j) % 2;
//change the color is the remainder is = 0
          if (remainder === 0){
            fill(0); 
          } else {
            fill(5, 150, 0);  
          }
//this can change the netting tightness when the mouse move around               
    let posX = i * width/50;   
    let posY = j * height/50;   
           
//Credit to Prof Luca :)  Love this moving function      
    
    let distanceFromMouse = dist(posX, posY, mouseX, mouseY);
        
    let mapDistance = map(distanceFromMouse, 0, 200, 50, 1, true);    
        
//Changing the shape and position of the rectangle 
        
    rect(500, posY, mapDistance, 600);
        
    rect(posY, 500 , mapDistance, 450);
        
    rect(posX, posX, mapDistance, 600);
        
    //rect(posY, posY, mapDistance, 600);

    rect(i * width /20, 0 , width/20, height/10);
        
    rect(j * width /20, 0 , height/20, height/10);

//Animation of rotating infinity using frame count - the higher the slower (i have too much shape so i need higher framerate)
    rotate(frameCount / 500);
  
    rect(j*width /10, 0 , width/10, height/10);
   
//Position of rotating - translate comes before 
    translate(600,300);
    rotate(360);
        
//final running the animation using the timer    
        
    rect(i*width/20 - runDistance, 0 , width/20 , height/ 300);
        
    }
    
  }
  
  console.log(runDistance)
  
}