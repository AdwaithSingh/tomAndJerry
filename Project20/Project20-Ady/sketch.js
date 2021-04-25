var bgImg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;
function preload() {
    //load the images here
    bgImg= loadImage("images/garden.png");
    catImg1= loadImage("images/cat1.png");
    catImg2= loadImage("images/cat2.png,cat3.png");
    mouseImg1= loadImage("images/mouse1.png");
    mouseImg2= loadImage("images/mouse2.png,mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,600);
    cat.scale=0.5;
    mouse = createSprite(600,600);
    mouse.scale=0.5;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.changeAnimation(mouseImg1);
        cat.changeAnimation(catImg1);
    }

    keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
        cat.addAnimation("catRunning", catImg2)
        cat.changeAnimation("catRunning");
    }
  //For moving and changing animation write code here


}
