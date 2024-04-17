let img;
let img2

function preload() {
  img = loadImage("billeder/mps.jpg");
  img2 = loadImage("billeder/mpsFull.jpg");
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
  img.loadPixels();
  image(img2, 0,0);
}

function draw(){
  ownFilter();
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      fill([getPixelValue(0,i,j),  getPixelValue(1,i,j),  getPixelValue(2,i,j),200]);
      rect(i, j, 1, 1);
    }
  }
}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
