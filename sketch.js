var fixedrect;
var movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "red";
  fixedrect.debug = true;

  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "red";
  movingrect.debug = true;
}

function draw() {
  background(0,0,0);
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  drawSprites();

  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";
  }
  else {
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";
  }
}