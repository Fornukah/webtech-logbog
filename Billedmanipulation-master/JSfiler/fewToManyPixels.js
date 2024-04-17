let img;
let pixelate=1;
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
  image(img,275,0);
    ownFilter();
}

function ownFilter(){
  let pixelSize = int(275/pixelate);
  for (let i=0;i<width/2-pixelSize; i = i+pixelSize){
    for (let j=0;j<height; j = j+pixelSize){
      fill([getPixelValue(0,i,j),  getPixelValue(1,i,j),  getPixelValue(2,i,j)]);
      rect(i,j,pixelSize,pixelSize);
    }
  }
}

function mouseClicked() {
    pixelate += 1;
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
