//just in case I want to save an earlier version of my code
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var trumpSnow = [];
var trumpArray = [new Image(), new Image(), new Image(), new Image()];
  trumpArray[0].src = "https://clipart.info/images/ccovers/1495816050trump-face-fuck-angry-transparent-png.png";
  trumpArray[1].src = "https://i.4pcdn.org/pol/1505780635116.png";
  trumpArray[2].src = "https://clipart.info/images/ccovers/1495816051donald-trump-face-png-big-smile.png";
  trumpArray[3].src = "http://www.stickpng.com/assets/images/5841c17aa6515b1e0ad75aa1.png";
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/**
 * Constructor for a single snow flake 
 */


function snowFlake(x,y,s,t) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.t = t; 
  var trumpSelect = Math.floor(Math.random() * trumpArray.length);  
  t.onload = function(){
    ctx.drawImage(t, x, y, t.width * s, t.height * s)
  }
  
}
snowFlake(500, 20, .2, trumpArray[1]);
snowFlake(100, 20, .4, trumpArray[1]);
/** 
 * TODO: Complete the function below to make lots of snow.   
 * Create each snowflake using the snowFlake constructor and 
 * populate the snowArray with your snowflakes
 * Each snow flake must be of random sizes and populate
 * the screen randomly in the y and x directions
 * Feel free to add a parameter to specify the amount of snow
 */

function snow(){
  
  var numberFlake = 20;
  for(var i = 0; i < numberFlake; i++)
  {
    trumpArray[i] = new snowFlake((Math.floor(Math.random() * 1200), 20, (Math.random()/5) + .1, trumpArray[Math.floor(Math.random() * trumpArray.length)]))
    trumpArray[i];
  }  
}


/**
 * TODO:  Make the snow appear randomly appear on the screen and move 
 * in a verticle direction add an additional variable to account for wind
 */

function drawSnow(){
  //The command below is needed to clear the screen between each movement
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
      
  //The command below is needed to animate the snow
  window.requestAnimationFrame(drawSnow);  
}
snow();
/**
 * TODO: Complete the function below to move each snow flake to the 
 * top of the screen once it has reached the bottom.
 */
function moveSnow(){
  
}


/**
 * TODO: Complete the drawScene function below.
 * Inside this function, call the additional functions needed to
 * complete your scene
 */
function drawScene(){

}

drawScene();
