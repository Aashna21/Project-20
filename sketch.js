var car, wall; 
var speed, weight; 

function setup() {
  createCanvas(1600,400);

    speed = random(55, 90); 
    weight = random(400, 1500); 

    car = createSprite(50, 200, 50, 50);
    car.velocityX = speed; 
    car.shapeColor = color(255); 

    wall = createSprite(1370, 200, 60, height/2);
    wall.shapeColor = color(80, 80, 80);
}  
 
function draw() {

  background(0);  

  //I added depth so that we could see what the color changes to
  car.depth = 1;
  wall.depth = 1; 
  car.depth = car.depth + 1; 

  isTouching();

  drawSprites();

}

function isTouching() {
  if(wall.x - car.x < (car.width + wall.width)/3 ) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/22500; 

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0); 
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0); 
    }
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0); 
    }
  }
}