
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var trumpSnow = [];
var trumpArray = [];
  trumpArray[0] = "https://clipart.info/images/ccovers/1495816050trump-face-fuck-angry-transparent-png.png";
  trumpArray[1] = "https://i.4pcdn.org/pol/1505780635116.png";
  trumpArray[2] = "https://clipart.info/images/ccovers/1495816051donald-trump-face-png-big-smile.png";
  trumpArray[3] = "http://www.stickpng.com/assets/images/5841c17aa6515b1e0ad75aa1.png";
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
  var img = new Image();
  img.src = trumpArray[t];    
  img.onload = function(){
    ctx.drawImage(img, x, y, img.width * s, img.height * s)
  }
}

/** 
 * TODO: Complete the function below to make lots of snow.   
 * Create each snowflake using the snowFlake constructor and 
 * populate the snowArray with your snowflakes
 * Each snow flake must be of random sizes and populate
 * the screen randomly in the y and x directions
 * Feel free to add a parameter to specify the amount of snow
 */
var snows = [];
function snow(trumpCount){  
  var numberFlake = trumpCount;
  for(var i = 0; i < numberFlake; i++)
  {
    var trumpParam = [Math.floor(Math.random() * 1200), 0, (Math.random()/5) + .1, Math.floor(Math.random() * 3)];
    snows[i].concat(trumpParam); 
  }  
}

/**
 * TODO:  Make the snow appear randomly appear on the screen and move 
 * in a verticle direction add an additional variable to account for wind
 */
function drawSnow(){
  //The command below is needed to clear the screen between each movement
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
  snow(20);
      for(var j = 0; j < snows.length; j++)
      {
          console.log(snows[j]);
          snows[j][1] += 1;
          snowFlake(snows[j][0],snows[j][1],snows[j][2],snows[j][3]);
      }
  //The command below is needed to animate the snow

  window.requestAnimationFrame(drawSnow);  
}
//while(true) {
//    drawSnow();
//}
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
