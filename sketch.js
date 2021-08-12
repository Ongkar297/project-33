const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world;
var background;
var month;

var bg = "snow2.jpg";
var bg = "snow3.jpg";

function preload(){
  getBackground();
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  Engine.update(engine);

  //createSprite(400, 200, 50, 50);
}
  
function draw() {
  if(backgroundImg){
    background(background);
  


}
fill("black");
textSize(30);
 
  
  
  if(hour>=12){
    text("Days:"+ month %12 + 50,100);
}else if(month==0){
    text("Days: 0 ",100,100);
}else{
    text("Days:"+ month  %12 +  50,100);
}
      drawSprites();
}

async function getBackground(){
  if( month>=0 && month<12 ){
    bg = "snow2.jpg";
}
else{
    bg="snow3.jpg";
}
background = loadImage(bg);
}


