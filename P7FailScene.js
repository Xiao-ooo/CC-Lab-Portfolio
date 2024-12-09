class FailScene {
  enterScene() {
    
    console.log("Entered Fail Scene");
    
  }

  update() {
   
  }

  display() {
push();
    
    noStroke();
    textFont(myFont);
    background(255, 15, 3);
    textSize(22);
    fill(255);
    textAlign(CENTER);
    text('YOUR DEAD!', width / 2, height / 2 - 20);
    textSize(14);
    text('Click to Restart', width / 2, height / 2 + 20);
    
pop();

  }

  exitScene() {
    console.log("Exiting End Scene");
  }

  keyPressed() {
    switchScenes(instructionScene);
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
