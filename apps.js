var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var trumpSnow = [];
var trumpArray = [];
  trumpArray[0] = "https://clipart.info/images/ccovers/1495816050trump-face-fuck-angry-transparent-png.png";
  trumpArray[1] = "https://i.4pcdn.org/pol/1505780635116.png";
  trumpArray[2] = "https://clipart.info/images/ccovers/1495816051donald-trump-face-png-big-smile.png";
  trumpArray[3] = "http://www.stickpng.com/assets/images/5841c17aa6515b1e0ad75aa1.png";
var wallImg = new Image();
var wallImg2 = new Image()
wallImg.src = "https://i.imgur.com/WeK70dS.jpg";
wallImg2.src = "https://i.imgur.com/zSMXZJs.jpg";
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var wallHeight = 15;

function genTrump() {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.random() * canvas.height - 1;
    const s = (Math.random()/5) + .1;
    const t = Math.floor(Math.random() * trumpArray.length-1);
    return {
        x,
        y,
        s,
        t
    };
}


function drawFace(f) {
  var img = new Image();
  img.src = trumpArray[f.t];    
  img.onload = function(){
    ctx.drawImage(img, f.x, f.y, img.width * f.s, img.height * f.s)
    ctx.stroke();
  }
}

function regenTrump() {
    newTrump = genTrump();
    newTrump.y = 0;
    return newTrump;
}

function drawLights() {
  var lightImg = new Image();  
  lightImg.src = "http://pluspng.com/img-png/png-file-name-christmas-lights-3000.png";
  lightImg.onload = function() {
    ctx.drawImage(lightImg, 0, 600 - (wallHeight * 20), lightImg.width / 3, lightImg.height / 3);
    ctx.drawImage(lightImg, lightImg.width / 3.3, 600 - (wallHeight * 20), lightImg.width / 3, lightImg.height / 3);
  }
}

function drawWall(wallCount) {
    var wallImg = new Image();
    var wallImg2 = new Image();
    wallImg.src = "https://i.imgur.com/WeK70dS.jpg";
    wallImg2.src = "https://i.imgur.com/zSMXZJs.jpg";   
    wallImg.onload = function(){
    x = 16;
    for(var i = 0; i < wallCount + 1; i++) {
        if(i%2 != 0)
        ctx.drawImage(wallImg, 0, 600 - ((i+1) * x), canvas.width, 20);    
        else
        ctx.drawImage(wallImg2, 0, 600 - ((i+1) * x), canvas.width, 20);    
    }
    if(wallCount === wallHeight)
    {
        ctx.drawImage(lightImg, 0, 600 - (wallHeight * 16), lightImg.width, lightImg.height);
    }
  }
  ctx.stroke();
}

function start() {
    for(var i = 0; i < 10; i++)
    {
        const newTrump = genTrump();
        trumpSnow.push(newTrump);
        drawFace(newTrump);
    }
    var fallCount = 0; 
    setInterval(() => {
        var wall = Math.floor(fallCount/10);
        ctx.clearRect(0,0,canvas.width, canvas.height);
        drawWall(wall);
        if(wall === wallHeight)
        {
            drawLights();
        }
        for(var i = 0; i < trumpSnow.length; i++)
        {
            const trump = trumpSnow[i];
            trump.y += 15 * trump.s;
            if(trump.y > canvas.height)
            {
                if(wall < wallHeight)
                {
                    fallCount++;
                }
                console.log('fell');
                trumpSnow.splice(i,1);
                trumpSnow.push(regenTrump());
                i--;
            }
            drawFace(trump);
        }
    },10)
}
start();