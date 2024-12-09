function keyPressed() {
  if (!inputActive) return;
  currentScene.keyPressed();
}

function keyReleased() {
  if (!inputActive) return;
  currentScene.keyReleased();
}

function mousePressed() {
  if (!inputActive) return;
  currentScene.mousePressed();
}

function mouseReleased() {
  if (!inputActive) return;
  currentScene.mouseReleased();
}

function mouseMoved() {
  if (!inputActive) return;
  currentScene.mouseMoved();
}

function mouseDragged() {
  if (!inputActive) return;
  currentScene.mouseDragged();
}

function mouseClicked() {
  if (!inputActive) return;
  currentScene.mouseClicked();
}