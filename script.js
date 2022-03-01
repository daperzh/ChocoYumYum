const canvas = document.getElementById('cnv'),
      ctx = canvas.getContext('2d'),
      WIDTH = canvas.width = 182.4,
      HEIGHT = canvas.height = 360;

let choco = new Image();
choco.src = 'https://www.linkpicture.com/q/chocobar.png';

let nom = new Audio('https://audio.jukehost.co.uk/guVK7FcMKlDsDIcb4X8Lp97zxmc2e38g');

let OPS;

choco.addEventListener('load', () => {
  OPS = {
    WIDTH: choco.width,
    HEIGHT: choco.height,
    CELL_W: choco.width / 11,
    CELL_H: choco.height,
    FRAMES: 10,
    CURR: 0
  }
  
  init();
});

function drawChoco(frame){
  ctx.drawImage(choco, OPS.CELL_W * frame, 0, OPS.CELL_W, OPS.CELL_H, 0, 0, WIDTH, HEIGHT);
}

function eatChoco(){
  if(OPS.CURR == 10) {
    OPS.CURR = 0;
  } else {
    OPS.CURR += 1;
    nom.currentTime = 0;
    nom.play();
  }

  init();
}

function resetSound(){
  nom.currentTime = 0;
}

function init(){
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  drawChoco(OPS.CURR);
}
