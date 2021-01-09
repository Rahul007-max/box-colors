var canvas;
var music;
var surface_1,surface_2,surface_3,surface_4;
var box;
var topEdge

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface_1 = createSprite(100,500,100,30);
    surface_1.shapeColor = "blue";
    surface_2 = createSprite(250,500,100,30);
    surface_2.shapeColor = "yellow";
    surface_3 = createSprite(400,500,100,30);
    surface_3.shapeColor = "green";
    surface_4 = createSprite(550,500,100,30);
    surface_4.shapeColor = "pink";

    
    box = createSprite(20,100,50,50);
    box.x = Math.round(random(20,750))
    box.velocityY = 8;




}

function draw() {
    background(rgb(169,169,169));
    music.play();

    if(surface_1.isTouching(box)){

       box.shapeColor = "blue";
       box.velocityY = 0;
       music.stop();

    }

    if(surface_2.isTouching(box)){

        box.shapeColor = "yellow"
        box.velocityY = 0;
        music.stop();

    }

    if(surface_3.isTouching(box)){

        box.shapeColor = "green";
        box.velocityY = 0;
        music.stop();


    }

    if(surface_4.isTouching(box)){

        box.shapeColor = "pink"
        box.velocityY = 0;
        music.stop();



    }






    drawSprites();

}
