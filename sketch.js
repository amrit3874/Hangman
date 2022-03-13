var img1,img2,img3,img4,img5,img6,img7, bgImg;
var words = ["HANGMAN"];

function preload(){
	 img1=loadImage("images/img1.png");
   img2=loadImage("images/img2.png");
   img3=loadImage("images/img3.jpeg");
   img4=loadImage("images/img4.jpeg");
   img5=loadImage("images/img5.jpeg");
   img6=loadImage("images/img6.jpeg");
   img7=loadImage("images/img7.jpeg");
   bgImg=loadImage("images/bgImg.jpg");
  }

function setup() {
	createCanvas(1300, 600);
  hangMan = createSprite(200,300);
  //hangMan.shapeColor = "black";
  hangMan.addImage("img1",img1);
  hangMan.scale = 2;
}

function draw() {

  background( bgImg);
   textSize(75);
   fill("black");
  text(words[0][0],600,100);
  text("_",675,100);
  text("_",750,100);
  text("_",825,100);
  text("_",900,100);
  text(words[0][5],975,100);
  text(words[0][6],1050,100);
  drawSprites();
}

 