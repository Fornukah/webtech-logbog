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
  image(img,w,0);
  ownFilter();
}

function ownFilter(){
  let pixelSize = int(map(mouseX , 0, 2*w, 2, 16));
  for (let i=0;i<w; i = i+pixelSize){
    for (let j=0;j<h; j = j+pixelSize){
      fill([getPixelValue(0,i,j),  getPixelValue(1,i,j),  getPixelValue(2,i,j)]);
      rect(i,j,pixelSize,pixelSize);
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
