var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snow = [];
var bgImg

function preload(){
  bgImg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  

  
  
}
 


function draw() {
  background(bgImg);
  
 
  Engine.update(engine);
  if(frameCount %60 === 0){ 
    snow.push(new Snow(random(width/2-90, width/2+90), 10,10));
  }
  for (var z = 0; z<snow.length; z++) {
    snow[z].display();
    
}

if(frameCount %60 === 0){ 
  snow.push(new Snow(random(width/2-250, width/2+250), 10,10));
}
for (var j = 250; j<snow.length; j++) {
  snow[j].display();
  
}
if(frameCount %60 === 0){ 
  snow.push(new Snow(random(width/2-450, width/2+450), 10,10));
}
for (var r = 450; r<snow.length; r++) {
  snow[r].display();
  
}
if(frameCount %60 === 0){ 
  snow.push(new Snow(random(width/2-650, width/2+650), 10,10));
}
for (var r = 650; r<snow.length; r++) {
  snow[r].display();
  
}
if(frameCount %60 === 0){ 
  snow.push(new Snow(random(width/2-450, width/2+450), 10,10));
}
for (var r = 450; r<snow.length; r++) {
  snow[r].display();
  
}
 
}