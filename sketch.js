const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drop1;
function preload(){
    
}

function setup(){
 var canvas = createCanvas(700,1000);  
 engine = Engine.create();
 world = engine.world;
 
 drop1 = new Drops({x : random(0,700), y : random(0,1000)})

}

function draw(){
background(0)   
Engine.update(engine);
   
drop1.display();
}   

