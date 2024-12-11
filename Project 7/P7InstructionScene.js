class InstructionScene {
  enterScene() {
    
    console.log("Entered Instruction Scene");
    
  }

  update() {
   
  }

  display() {
push();
    
    background(229, 245, 201);    
    textFont(myFont);
//Title
    textSize(32);
    fill(145, 100, 65);
    textAlign(CENTER);
    text('ESCAPE THE EYES', width / 2, height / 3 - 20);
    textSize(14);
    text('Press SPACE to Start', width / 2, height / 2 + 20);
//BG story & Instruction
    textSize(10);
    text('The terror of entering the living room at night...',            300, 350);
    text('Escape from those eyes and get to your safety zone!',          300, 365);
    text('Use the ARROWKEYS to control your Character', 300,              320);
    fill(255, 0, 0);
    text('Avoid the EYES', 300, 270);
    text('Get to the DOOR to continue game', 300, 70);
    
    
pop();
  }

  exitScene() {
    
    console.log("Exiting Instruction Scene");
    
  }

  keyPressed() {
    switchScenes(bedRScene);
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