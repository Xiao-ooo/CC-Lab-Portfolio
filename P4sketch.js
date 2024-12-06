function setup() {
  
  createCanvas(400, 600);
  
  background(0);
  
}

function draw() {
  
  createHead();

//Can pass parameters inside to change the direction of the wings 
  leftWing(140, 230);
  rightWing(260, 230);
  
  createLLeg(160, 450);
  createRLeg(235, 450);
  
  createBody();
  
  leftFeet();
  rightFeet();
  
}

//Draws the whole head
function createHead(){
push();

  noStroke();
  blendMode(DIFFERENCE);
//Base Face  
  fill(226, 201, 245);
  circle(200, 150, 100);
  fill(120, 255, 250);
  circle(200, 150, 95);
//Left Eyes + ball
  fill(57, 21, 84);
  ellipse(180, 140, 15, 30);
    fill(255, 130, 46);
    ellipse(181, 145, 11, 20);
      fill(27, 8, 41);
      ellipse(181, 148, 9, 11);
//Right Eyes + ball  
  fill(255, 130, 46);
  ellipse(220, 140, 15, 30);
    fill(57, 21, 84);
    ellipse(221, 145, 11, 20);
      fill(250, 113, 22);
      ellipse(222, 148, 8, 10);
//Right Blush
  fill(250, 113, 22);
  ellipse(174, 168, 20, 8);
    //Left Blush
    fill(57, 21, 84);
    ellipse(222, 168, 20, 8);
//Mouth
  fill(117, 9, 224);
  ellipse(200, 180, 15, 25);
  
//HeadSet
  fill(235, 111, 9);
  ellipse(200, 100, 30, 20);
  fill(255, 115, 0);
  ellipse(200, 90, 20, 10);
  fill(145, 14, 227);
  ellipse(201, 90, 19, 10);
  fill(145, 14, 227);
  ellipse(200, 84, 12, 9);
  fill(255, 115, 0);
  ellipse(201, 84, 9, 5);
  
pop();
}

//Draws the left side of the wing
function leftWing(leftDirecX, leftDirecY){
push();
  
  noStroke();
  blendMode(DIFFERENCE);
//Changing the angle of the wing and by giving it an argument variable
  translate(leftDirecX, leftDirecY);
  rotate(PI/9);
  
  fill(102, 25, 255);
  ellipse(0, 0, 150, 80);
    fill(218, 247, 220);
    ellipse(0, 0, 120, 50);
      fill(255);
      ellipse(0, 0, 80, 25);
  
pop();
}


//Draws Right side of the wing
function rightWing(rightDirecX, rightDirecY){
push();
  
  noStroke();
  blendMode(DIFFERENCE);
  translate(rightDirecX, rightDirecY);
  rotate(9/PI);
  
  fill(102, 25, 255);
  ellipse(0, 0, 150, 80);
    fill(218, 247, 220);
    ellipse(0, 0, 120, 50);
      fill(255);
      ellipse(0, 0, 80, 25);
  
pop();
}


//Draws the middle part of the BODY
function createBody(){
push();
  
  noStroke();
  fill(23, 50, 115);
  ellipse(200, 280, 40, 160);
  fill(226, 201, 240);
  ellipse(200, 220, 11, 8);
  ellipse(200, 240, 15, 11);
  ellipse(200, 260, 19, 14);
  ellipse(200, 280, 23, 17);
  ellipse(200, 300, 19, 14);
  ellipse(200, 320, 15, 11);
  ellipse(200, 340, 11, 8);
  
pop();
}

//Drawing the left leg and knee cap
function createLLeg(leftX, leftY){
push();
  
  noStroke();
  translate(leftX, leftY);
  rotate(PI/9);
  
    fill(147, 119, 230);
    ellipse(0, 0, 15, 200);
    fill(245, 92, 27);
    ellipse(0, 0, 8, 40);
  
 
pop();  
}

//Drawing the right leg and knee cap
function createRLeg(rightX, rightY){
push();
  
  noStroke();
  translate(rightX, rightY);
  rotate(9/PI);
  
    fill(147, 119, 230);
    ellipse(0, 0, 15, 200);
    fill(245, 92, 27);
    ellipse(0, 0, 8, 40);
  
pop();   
}

//Drawing the left little feet
function leftFeet(){
push();
  
  noStroke();
  fill(255, 120, 196);
  ellipse(110, 540, 40, 20);
 
pop();  
}

//Drawing the right little feet
function rightFeet(){
push();
  
  noStroke();
  fill(255, 120, 196);
  ellipse(280, 540, 40, 20);
 
pop();    
}
