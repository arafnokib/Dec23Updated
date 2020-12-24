var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var scoreCount;
var form, player, game;
var score = 0;
var paddles;
var paddle1;
var paddle2;
var ball;
var b1;
var topWall;
var bottomWall;
var dbXPosition;
var dbYPosition;
var score = 0;
var scoreData = 0;
var scoreIndex;
var ballX;
var ballY;
var nameRef1;
var nameRef2;
var a;
var b;
var c;
var d;
var ballIndex;
var storyState = -1;




function preload(){
  b1 = loadImage("ball.png")
  bg = loadImage("bg1'.jpg")
  a = loadImage("imgs/1.jpg")
  b = loadImage("imgs/2.jpg")
  c = loadImage("imgs/3.jpg")
  d = loadImage("imgs/4.jpg")

}

function setup(){
  canvas = createCanvas(1200,600);
  background("white")
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  
}


function draw(){
  //image(a,0,0,223,226);

  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }


    
    

   

  
  //console.log(mouseX)
  //console.log(mouseY)
/*for (var plr in allPlayers) {


  
//var startX = -855
var startX = 105

startX += 970
console.log(startX)
*/
//text(player.name, 105,100)
//text(player.name, 1175,100)

//}
//console.log("Ball Ref X:" + ballRefX)
////console.log("Ball Ref Y:" + ballRefY)

//console.log("Ball X:" + ball.x)

//.log("Ball Y:" + ball.y)
}


