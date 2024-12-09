class BedRScene {
  constructor(bedDoorX,bedDoorY,bedDoorW,bedDoorH) {
  this.bedDoorX = 0;
  this.bedDoorY = 120;
  this.bedDoorW = 50;
  this.bedDoorH = 150;
  
}
  enterScene() {
    
    console.log("Entered Bedroom Scene");
    
  }

  update() {
    
  }

  display() {
push();
    
    noStroke();
    textFont(myFont);
    // background(252, 204, 126);
    background(floor);
 
    //Carpet
    fill(167, 217, 168);
    ellipse(390, 170, 150, 190);
    
    //Bed
    fill(77, 134, 163);
    rect(400, 0, 150, 250);
    fill(184, 246, 252);
    rect(410, 10, 60, 30);
    rect(480, 10, 60, 30);
    rect(405, 50, 140, 190);
    fill(21, 161, 128);
    rect(420, 10, 40, 30);
    rect(490, 10, 40, 30);
    rect(405, 80, 140, 150);
    
    //Shelf
    fill(115, 63, 24);
    rect(300, 5, 80, 70);
    fill(153, 94, 49);
    rect(300, 5, 80, 40);
    fill(166, 102, 53);
    circle(340, 55, 5);
    circle(340, 65, 5);
    
    //Wardrobe
    fill(245, 174, 42);
    rect(50, 5, 200, 80);
    fill(227, 152, 14);
    rect(50, 5, 200, 70);
    
    
    
    //Bedroom DOOR 
    fill(0);
    rect(0, 120, 50, 150); 
    textSize(20);
    
    push();
    fill(30, 247, 34);
    textSize(10);
    rotate(PI/2);
    text('DOOR', 180, -20);
    pop();
    
    textSize(20);
    fill(0);
    text('Bedroom', 200, 50);
    
pop();
  }

  exitScene() {
    
    console.log("Exiting Bedroom Scene");
    
  }

  keyPressed() {
    let distanceFromDoor = dist(mainCharacter.x + 50,                   mainCharacter.y + 50, this.bedDoorX, this.bedDoorY);
    if (distanceFromDoor < (this.bedDoorX, this.bedDoorY,               this.bedDoorW, this.bedDoorH))
        switchScenes(livingRScene);
  }

  keyReleased() {
    
  }

  mousePressed() {
    
  }

  mouseReleased() {
    
  }

  mouseMoved() {
    
  }

  mouseDragged() {
    
  }

  mouseClicked() {
    
  }
}
