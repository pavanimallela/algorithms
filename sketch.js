var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,30,100);
  fixedRect.shapeColor= "blue";
  movingRect= createSprite(300,300,100,50);
  movingRect.shapeColor="blue";
 
}

function draw() {
  background("skyblue"); 
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    fixedRect.shapeColor="orange";
    movingRect.shapeColor="orange";
  }
  else{

fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}