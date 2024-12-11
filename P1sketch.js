function setup() {
  createCanvas(400, 400).parent("sketch-container");
}

function draw() {
  background(120, 237, 250);
  noStroke();
  push();
//Pond Color  
  fill(60, 102, 55, 190);
  rect(0, 240, 400, 160);
  fill(16, 48, 3, 70, 50);
  rect(0, 230, 400, 160);
  rect(0, 220, 400, 160);
  rect(0, 210, 400, 160);
  rect(0, 200, 400, 160);
  rect(0, 190, 400, 160);
  rect(0, 290, 400, 160);
  
//Clouds:
    //Clouds #1 - L
      fill(255);
      circle(70, 60, 40);
      circle(100, 62, 43);
      circle(130, 60, 45);
    //Cloud #2 - S
      circle(210, 80, 18);
      circle(220, 82, 15);
      circle(230, 81, 15);
    //Cloud #3 - M
      circle(300, 50, 45);
      circle(330, 50, 50);
      circle(360, 50, 45);
 
  
//Lotus Leaf 
  fill(6, 36, 9);
  push();
  translate(30, 300)
  rotate(QUARTER_PI/5)
  arc(0, 0, 100, 40, 0, PI + HALF_PI);
  pop();
  arc(300, 370, 50, 20, 0, PI + HALF_PI);
  fill(60, 102, 55);
 
  
//Yellow Submarine:
//main body - bg
  fill(61, 59, 48);
  ellipse(180, 250, 200, 100);
      //main body - yellow
      fill(222, 200, 78);
      ellipse(180, 250, 190, 90);
  
//tail - bg
  fill(61, 59, 48);
  ellipse(260, 240, 80, 30);
      //tail - yellow
      fill(222, 200, 78);
      ellipse(260, 240, 70, 20);
      
//head - bg
  push();
  fill(61, 59, 48);
  ellipse(160, 200, 80, 50);
      //tail - yellow
      fill(222, 200, 78);
      ellipse(160, 200, 70, 40);
      //head - window
  blendMode(MULTIPLY);
      fill(220, 237, 194);
      ellipse(139, 200, 29, 28);
  pop();
  
  //head - bg - tube up
  fill(61, 59, 48);
  rect(160, 150, 10, 30, 10);
      //head - tube up yellow
      fill(222, 200, 78);
      rect(161.5, 150, 7, 25, 10);
  //head - tube left
  fill(61, 59, 48);
  rect(150, 150, 20, 10, 10);
      //head - tube left yellow
      fill(222, 200, 78);
      rect(151, 151, 17.5, 8, 10);
  
//Window - bg
  push();
  blendMode(MULTIPLY);
  fill(229, 237, 194);
  ellipse(95, 250, 20, 35);
  fill(207, 252, 243);
  ellipse(130, 240, 30, 15);
  ellipse(170, 240, 25, 15);
  ellipse(205, 240, 20, 15);
  fill(220, 237, 194);
  ellipse(170, 280, 170, 29);
  pop();

//bubble
  fill(218, 245, 239, 150);
  circle(140,150, 10);
  circle(130,130, 8);
  circle(120,110, 5);
  
  pop();
}
