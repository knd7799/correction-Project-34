//Create variables here
var dog,dogImg;
var happDog,happyDogImg;
var foodS;
var foodStock;
var database;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()

    dog = createSprite(300,300,10,10);
    
 
    foodStock=database.ref("food");
    foodStock.on("value",readStock);
  
  
}


function draw() {  
  background(46,136,87);

  text(mouseX+ "," +mouseY, mouseX,mouseY);
  text ("Note:Press UP_ARROW Key To Feed Drago Milk");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here

}
function readStock (data){
  foodS = data.val ();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}


