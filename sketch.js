var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function setup() {

  monkey = createSprite(50, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 380, 900, 10);
  ground.shapeColor = "green";
  ground.velocityX = -4;
  ground.x = ground.width / 2;
}


function draw() {

  background("coral");

  if (keyDown("space")) {
    monkey.velocityY = -4;
  }
  monkey.velocityY = monkey.velocityY + 0.2;
  monkey.collide(ground);

  if (ground.x < 400) {
    ground.x = 400;
  }

  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
  }

  drawSprites();
  food();
  spawnobstacle(); 
   
}

function food() {

  if (frameCount % 80 === 0) {
    banana = createSprite(400, 200, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;

    banana.y = Math.round(random(200, 250));
    banana.velocityX = -7;
    banana.setLifetime = 100;
    bananaGroup.add(banana);
  }
}

function spawnobstacle() {

  if (frameCount % 300 === 0) {
    obstacle = createSprite(400, 355, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;

    obstacle.velocityX = -7;
    obstacle.setLifetime = 100;
    obstacleGroup.add(obstacle);
  }
}