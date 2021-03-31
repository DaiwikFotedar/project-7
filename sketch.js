var canvas;
var music;
var s1;
var s2;
var s3;
var s4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(0,580,360,30);
s1.shapeColor="blue";
s2=createSprite(295,580,200,30);
s2.shapeColor="orange";
s3=createSprite(515,580,200,30);
s3.shapeColor="indigo";
s4=createSprite(740,580,220,30);
s4.shapeColor="green";
ball=createSprite(random(20,750),100,40,40);
ball.shapeColor="white";
ball.velocityX=4;
ball.velocityY=9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);
if(s1.isTouching(ball) && ball.bounceOff(s1)){
    ball.shapeColor="blue";
    music.play();
}
if(s2.isTouching(ball) && ball.bounceOff(s2)){
    ball.shapeColor="orange";
    music.stop();
}
if(s3.isTouching(ball) && ball.bounceOff(s3)){
    ball.shapeColor="indigo";
}
if(s4.isTouching(ball) && ball.bounceOff(s4)){
    ball.shapeColor="green";
    
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
