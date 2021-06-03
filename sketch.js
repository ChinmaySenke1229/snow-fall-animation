const Engine = Matter.Engine;
const  World = Matter.World;
 const  Events = Matter.Events;
 const  Bodies = Matter.Bodies;

  var snows=[];

var snowImg;
var bgImg;

function preload(){
 bgImg=loadImage("snow2.jpg");

}


function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);

}

function draw() {
  Engine.update(engine);
  background(bgImg);
  
  if(frameCount%50===0){
    snows.push(new Snow(random(100,700),-10,20))
  }

  for(var i=0;i<snows.length;i++){
    snows[i].display()
  }
  drawSprites();
}