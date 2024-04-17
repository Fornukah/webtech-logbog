let img;

function preload(){
  img = loadImage('billeder/mpsFull.jpg');
}

function setup(){
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
  img.loadPixels();
}

function draw(){
  ownFilter();
  image(img,w,0);
  noLoop();
}

function ownFilter(){
  for (let i=0;i<w; i += 1){
    for (let j=0;j<h; j += 1){
      let c = img.get(i,j);
      fill((getPixelsOwn(0,i,j)+getPixelsOwn(1,i,j)+getPixelsOwn(2,i,j))/3-j);
      rect(i,j,1,1);
    }
  }
}


function getPixelsOwn(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
