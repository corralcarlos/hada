var starImg, bgImg, fairyImg;
var star, starBody;
var fairy;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada

	
	fairy = createSprite(650,30);
	star = createSprite(650,30);
	fairy.addAnimation("fairy", fairyImg)
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairy.scale = 0.2
  fairy.position.y= 500
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if (star.y > 470 && starBody.position.y > 470) {
	 Matter.Body.setStatic(starBody, true);
 }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	
	if (keyCode === LEFT_ARROW) {
		fairy.position.x = fairy.position.x - 10;
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.position.x = fairy.position.x + 10;
	}
}
