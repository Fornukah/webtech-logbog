let img;

function preload() {
  img = loadImage('billeder/mpsFull.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
  img.loadPixels();
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i = i+1) {
    for (let j = 0; j < h; j = j+1){
      fill(getRGBvalue(256,i,j),getRGBvalue(0,i,j),getRGBvalue(0,i,j));
      rect(i, j, 1, 1);
    }
  }
}

function getRGBvalue(n,i,j){
  c = getPixelValue(n,i, j);
  if (c>160){c=255;}
  else{c=0;}
  return c;
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
