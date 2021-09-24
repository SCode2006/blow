const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

let engine;
let world;
var ball,blow;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 100, 100);
  createSprite(350,250,200,50);
  ball = Bodies.circle(400,350,20);
  World.add(world,ball);
  blow = createButton("Click to Blow");
  blow.position(width/2,height-100);
  blow.mousePressed(blowed);
  ellipseMode(RADIUS);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20);
}

function blowed(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}