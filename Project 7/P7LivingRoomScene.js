class LivingRScene {
  constructor() {
    this.livingDoorX = 550;
    this.livingDoorY = 120;
    this.livingDoorW = 50;
    this.livingDoorH = 150;
// Eye value in the box   
    this.eyes = [];  
//Can set amount of eyeballs [more the harder to play]
    this.numEyes = 20;

// Create random eyes
    for (let i = 0; i < this.numEyes; i++) {
      let eye = new Eye(random(width), random(height),                     random(0,2), random(2, 0));
      this.eyes.push(eye);
    }
  }

  enterScene() {
  
    console.log("Entered Living Room Scene");
    
  }

  update() {
    for (let eye of this.eyes) {
      eye.update(); 
    }
  }

  display() {
push();
    
    noStroke();
    textFont(myFont);
    // background(12, 9, 33);
   // background(0);
    background(livingFloor, 100);
    
// Door
    fill(252, 204, 126);
    rect(550, 120, 50,150); 
    textSize(22);
    
    push();
    fill(30, 247, 34);
    textSize(10);
    rotate(PI/2);
    text('DOOR', 180, -570);
    pop();
    
//
    
    
    
//warm orange color represents "light"
    fill(252, 204, 126); 
    text('Living Room', 100, 50);
    textSize(10);
    text('*Hint: Stay still...they wont hurt you', 2, 390);
    
  
    
pop();
    
    for (let eye of this.eyes) {
      eye.display();
    }
  }

  exitScene() {
    console.log("Exiting Living Room Scene");
  }

keyPressed() {
//Collision of when user touches the eyballs - range setting
    for (let eye of this.eyes) {
      let distance = dist(mainCharacter.x + 50, mainCharacter.y           +50, eye.x, eye.y);
     if (distance < (50 + eye.size / 2)) {
         switchScenes(failScene);
         return;
    }
  }  
//If user is at the door to go to the next scene - setting a range [user is 100 x 100 px which is plus 50 to find the center]
    let distanceFromDoor = dist(mainCharacter.x + 50,                   mainCharacter.y + 50, this.livingDoorX,                         this.livingDoorY);
    if (distanceFromDoor < (this.livingDoorW, this.livingDoorH))     {
      switchScenes(bathRScene);
    }
  }  
}

// making a Eye class for random moving eyes to be inserted into the LivingRoom Scene
class Eye {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = 20;
  }

  update() {
    
    this.x += this.speedX;
    this.y += this.speedY;

// Restrict my eyeballs flying out of canvas!
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }

  display() {
push();
    
// eyeball (white part)    
    fill(255); 
    ellipse(this.x, this.y, 25, this.size);
// eyeball (red part)    
    fill(255, 0, 0);
    ellipse(this.x, this.y, 18, 22);
// Pupil (black part)    
    fill(0);
    ellipse(this.x, this.y,9, 15);
// Pupil highlight (white part)    
    fill(255);
    ellipse(this.x, this.y,4, 4);
    
pop();
  }
} 