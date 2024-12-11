//All the Global Variables
let currentScene;
let instructionScene;
let bedRScene, livingRScene, bathRScene;
let failScene;
let endScene;

let mainCharacter;
let img; //My character IMAGE
let floor;
let bathroomTile;
let livingFloor;

let myFont;
let myMusic;

function preload() {
  
//Fonts credit to: PressStart2P
  // myFont = loadFont('PressStart2P-Regular.ttf');
  myFont = loadFont('CC-Lab-Portfolio-main/Project 7/P7Font.ttf');

//BG Music credit to: Dread Pitt "Fear"
  // myMusic = loadSound('fear-dread-pitt-main-version-296.mp3');
  myMusic = loadSound('CC-Lab-Portfolio-main/Project 7/P7 Sound.mp3');
  
//My MAIN Character image - Credit to myself
  // img = loadImage('MyCharacter.png');
  img = loadImage('CC-Lab-Portfolio-main/Project 7/P7MyCharacter.png');
  
//BedRoom Floor Tiles image credit to: Misfitoki
  // floor = loadImage ('pixel_art_study___tiles__1_by_misfitoki_deqc368-fullview.jpg');
  floor = loadImage ('CC-Lab-Portfolio-main/Project 7/P7BedRTile.jpg');

//BathRoom Floor Tiles image - credit to myself
  // bathroomTile = loadImage('bathroomTile.png');
  bathroomTile = loadImage('CC-Lab-Portfolio-main/Project 7/P7BathRTile.png');

//LivingRomm Floor Tiles image credit to: Diego Lopez  
  // livingFloor = loadImage('diego-lopez-groundtiles.jpg');
  livingFloor = loadImage('CC-Lab-Portfolio-main/Project 7/P7LivingRTile.jpg');

}

function setup() {
  createCanvas(600, 400).parent("sketch-container");
  
  myMusic.play();
  myMusic.setVolume(0.5);
  
  mainCharacter = new MainCharacter(img, 230, 130);
  
  instructionScene = new InstructionScene();
  bedRScene = new BedRScene();
  livingRScene = new LivingRScene();
  bathRScene = new BathRScene();
  endScene = new EndScene();
  failScene = new FailScene();
  
  currentScene = instructionScene;
  currentScene.enterScene(); 
  
}

//KeyPressed called once and functions all the KeyPressed 
function keyPressed() {
  currentScene.keyPressed();
}


function draw() {
  
  currentScene.update();   
  currentScene.display();  
  
  mainCharacter.update();
  mainCharacter.display(); 
}


//Switching scene function using current scene
function switchScenes(targetScene) {
  console.log(`Switching to ${targetScene.constructor.name}`); 
  
  currentScene.exitScene(); 
  currentScene = targetScene;
  currentScene.enterScene(); 
}