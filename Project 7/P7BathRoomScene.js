class BathRScene {
  constructor(bathDoorX, bathDoorY, bathDoorW, bathDoorH){
    this.bathDoorX = 0;
    this.bathDoorY = 120;
    this.bathDooW = 50;
    this.bathDoorH = 150;
    
  }
  enterScene() {
    
    console.log("Entered Bathroom Scene");
    
  }

  update() {
   
  }

  display() {
push();
    
    noStroke();
    textFont(myFont);
    background(255);
    background(bathroomTile);
    
//Door
    fill(0);
    rect(0, 120, 50, 150); 
    
    push();
    fill(30, 247, 34);
    textSize(10);
    rotate(PI/2);
    text('DOOR', 180, -20);
    pop();
    
//Bathtub
    fill(233, 245, 244);
    rect(320, 280, 250, 110);
    fill(177, 240, 236);
    ellipse(445, 335, 250, 105);
    fill(23, 38, 37);
    circle(350, 335, 10);
  
//Toilet
    fill(233, 245, 244);
    ellipse(150, 330, 80, 100);
    fill(201, 240, 237);
    ellipse(150, 330, 40, 50);
    fill(233, 245, 244);
    rect(110, 380, 80, 20);
    fill(157, 196, 193);
    ellipse(150, 340, 10, 10);
  
//Sink
    fill(233, 245, 244);
    rect(150, 0, 300, 100);
    fill(201, 240, 237);
    ellipse(230, 50, 100, 80);
    ellipse(370, 50, 100, 80);
    fill(157, 196, 193);
    ellipse(230, 40, 10, 10);
    ellipse(370, 40, 10, 10);
    fill(91, 252, 239); //Cold water
    rect(225, 0, 10, 30);
    fill(247, 68, 32); //Hot Water
    rect(365, 0, 10, 30);
    
//Bathroom Title    
    textSize(22);
    fill(0);
    text('Bathroom', 200, 80);
       
pop();
  }

  exitScene() {
    console.log("Exiting Bathroom Scene");
  }

 keyPressed() {
    let distanceFromDoor = dist(mainCharacter.x, mainCharacter.y,         this.bathDoorX, this.bathDoorY);
    if (distanceFromDoor < (this.bathDoorX, this.bathDoorY, this.bathDoorW, this.bathDoorH))
      switchScenes(endScene);
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