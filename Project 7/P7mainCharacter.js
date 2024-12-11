class MainCharacter {
  constructor(img, x, y, charSpeed = 8) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = charSpeed;
//Image Size variables     
    this.width = 150;  
    this.height = 100; 
  }

  move(amtX, amtY) {
    this.x += amtX * this.speed;
    this.y += amtY * this.speed;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.move(-1, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.move(1, 0);
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.move(0, 1);
    }
    if (keyIsDown(UP_ARROW)) {
      this.move(0, -1);
    }

// Keep my character inside the canvas
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.width > width) {
      this.x = width - this.width;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y + this.height > height) {
      this.y = height - this.height;
    }
  }

  display() {
    push();
    image(this.img, this.x, this.y, this.width, this.height);
    pop();
  }
}
