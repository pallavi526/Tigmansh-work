var Runner_running,coin,bomb;
var bombImg,pathImg
function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg=loadImage("bomb.png");
 pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,400,400);
  path.addImage(pathImg);

  bomb = createSprite(200,200,10,10);
  bomb.addImage(bombImg);
  bomb.scale=0.2

 

}

function draw() {
  background(0);
 
  drawSprites();
}
