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

function genTrump() {
    const x = Math.floor(Math.random() * 1200);
    const y = 0;
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
  }
}

function regenTrump() {
    newTrump = genTrump();
    return newTrump;
}

function start() {
    for(var i = 0; i < 30; i++)
    {
        const newTrump = genTrump();
        trumpSnow.push(newTrump);
        drawFace(newTrump);
    }

    setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height)
        for(var i = 0; i < trumpSnow.length; i++)
        {
            const trump = trumpSnow[i];
            trump.y += 20 * trump.s;
            if(trump.y > canvas.height)
            {
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