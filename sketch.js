var foodS=20, foodStock;
var dogImg1,dogImg2,dog;
var database,foodStock;
var food;
var feedTime,lastFed;
var name;

function preload()
{
	dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,400,20,20);
  dog.addImage(dogImg1);
  dog.scale = 0.2;

  food = new Food();
  form = new Form();
  
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

  feedTime = database.ref("FeedTime");
  feedTime.on("value",function(data){
      lastFed = data.val()
  })
}


function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  fill("white");
textSize(25);
stroke(7);
text("Press Up Arrow Key To Feed Drago milk" ,25,50);
  textSize(20)
  text("Foodstock:" + foodS, 200,90)

  food.display();
  form.display();

  drawSprites();
}

function writeStock(x){
  if(x>0){
    x-=1;
  }
  database.ref("/").update({
    Food:x,
    FeedTime:hour()
  });
}

function readStock(data){
  foodS = data.val();
}