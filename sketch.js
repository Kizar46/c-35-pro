const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
  getTime()
}

function setup() {
 var canvas= createCanvas(1200,600);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground=new Ground(600,600,1200,50)
    runer=new Runer(100,550,100,100)

}

function draw() {
  background("green");  
  drawSprites();
  console.log(mouseX+";"+mouseY)
  ground.display()
 runer.display()

}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);

  if(hour>=06 && hour<=19){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg2.png";
  }

  backgroundImg = loadImage(bg);
}