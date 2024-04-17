let img;
function preload() {
  img = loadImage('billeder/mpsFull.jpg');
}

function setup() {
  w = img.width;
  h = img.height  ;
  createCanvas(4 * w, h);
  noStroke();
  img.loadPixels();
}

function draw() {

  ownFilter();
  image(img, w, 0);
//  noLoop();
}

function ownFilter() {
  let r = 1;
  for (let i = 0; i < w; i += 2) {
    for (let j = 0; j < h; j += r) {
      b = map(mouseY,0,400,1,10);
      r = int(random(1,b));
      fill([getPixelValue(1,i,j),  getPixelValue(100,i,j),  getPixelValue(20,i,j)]);
      rect(i, j, 2, r);
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
