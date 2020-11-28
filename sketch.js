


function setup() {
  createCanvas(800,400);
  b1 = createSprite(400, 200, 50, 50);
b2 = createSprite(500,110,20,20)
}


function draw() {
  background(255,255,255);  
  drawSprites();
b1.shapeColor="green"
b2.shapeColor="blue"
b2.x=mouseX
b2.y=mouseY

if(((b2.x-b1.x)<((b1.width+b2.width)/2))&&((b1.x-b2.x)<((b1.width+b2.width)/2))&&((b2.y-b1.y)<((b1.height+b2.height)/2)) &&((b1.y-b2.y)<((b1.height+b2.height)/2)))



{
b1.shapeColor="yellow"
b2.shapeColor="yellow"
}


console.log(b2.x-b1.x)
}