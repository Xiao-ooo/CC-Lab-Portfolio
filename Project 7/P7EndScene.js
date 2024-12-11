class EndScene {
  enterScene() {
    
    console.log("Entered End Scene");
  }

  update() {
   
  }

  display() {
    push();
    noStroke();
    textFont(myFont);
    background(141, 252, 101);
    textSize(22);
    fill(255);
    textAlign(CENTER);
    text('YOU DID IT!', width / 2, height / 2 - 20);
    textSize(14);
    text('Press SPACE to Replay', width / 2, height / 2 + 20);
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