const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingShot;
var box,box1,box2;
var boxes=[],boxes2=[],boxes3=[];
var boxes4=[],boxes5=[],boxes6=[];;
function preload() {
   // backgroundImg = loadImage("bg.png");
   ballImage=loadImage("ball.png");
}

function setup(){
    
  var canvas=createCanvas(1300,600);
  engine = Engine.create();
	world = engine.world;
 // createSprite(400, 200, 50, 50);

  platform = new Ground(width/2,height,1300,20);


   
    console.log(height);
    
    for (let i = 1; i <= 7; i++) {
      
     // fill("yellow");
      strokeWeight(4);
      box = new Box(890-i*30,450,30,30);
      //console.log(box.body.position.y);
      boxes[i]=box;
     
    }
    for (let k = 1; k <= 5; k++) {
      
     // fill("orange");
      strokeWeight(4);
      box = new Box(860-k*30,450,30,30);
     // console.log(box.body.position.y);
      boxes2[k]=box;
     
    }
    for (let k = 1; k <= 3; k++) {
      
     // fill("blue");
      strokeWeight(4);
      box = new Box(830-k*30,450,30,30);
      //console.log(box.body.position.y);
      boxes3[k]=box;
     
    }
    box = new Box(770,450,30,30);
  //  platform = new Ground(250, height, width, 10);
    stand = new Ground(780, 470,300,10);

    for (let i = 1; i <= 7; i++) {
      
      //fill("yellow");
      strokeWeight(4);
      box = new Box(1090-i*30,250,30,30);
      console.log(box.body.position.y);
      boxes4[i]=box;
     
    }
    for (let k = 1; k <= 5; k++) {
      
      //fill("orange");
      strokeWeight(4);
      box = new Box(1060-k*30,250,30,30);
     // console.log(box.body.position.y);
      boxes5[k]=box;
     
    }
    for (let k = 1; k <= 3; k++) {
      
      //fill("blue");
      strokeWeight(4);
      box = new Box(1030-k*30,250,30,30);
      //console.log(box.body.position.y);
      boxes6[k]=box;
     
    }
    box1 = new Box(970,250,30,30);
    stand1 = new Ground(950, 270,300,10);
  //  World.add(world,boxes);

  polygon = Bodies.circle(100,220,30);
  World.add(world,polygon);
  sling = new Launcher(polygon,{x:122,y:200})

}

function draw(){
  
    background(200);
   
   //box.display();
   
    for (let j = 1; j <= 7; j++) {
      //square(i * 50, i * 50, 50);
      boxes[j].display();
      //square(890-j*30,450,30);
    }
    for (let j = 1; j <= 5; j++) {
      //square(i * 50, i * 50, 50);
      boxes2[j].display();
      //square(890-j*30,450,30);
    }
    for (let j = 1; j <= 3; j++) {
      //square(i * 50, i * 50, 50);
      boxes3[j].display();
      //square(890-j*30,450,30);
    }
   //box1.display();
   //box2.display();
   stand.display();

   for (let j = 1; j <= 7; j++) {
    
    boxes4[j].display();
    //square(890-j*30,450,30);
  }
  for (let j = 1; j <= 5; j++) {
    //square(i * 50, i * 50, 50);
    boxes5[j].display();
    //square(890-j*30,450,30);
  }
  for (let j = 1; j <= 3; j++) {
    //square(i * 50, i * 50, 50);
    boxes6[j].display();
    //square(890-j*30,450,30);
  }
 //box1.display();
 //box2.display();
 stand1.display();
   platform.display();

   imageMode(CENTER);
	image(ballImage,polygon.position.x,polygon.position.y,50,50);
	
   sling.show();
   Engine.update(engine);
}
function mouseDragged()
{
	Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed() {
  if (keyCode==32) {
    sling.attach(this.polygon);
    sling.show();
    
  }
  
}
