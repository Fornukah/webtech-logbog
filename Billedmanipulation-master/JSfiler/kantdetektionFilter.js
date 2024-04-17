let img;

function preload() {
  img = loadImage('billeder/mpsFullGrayscale.jpg');
}

function setup() {
  w = 275;
  h = 387;
  createCanvas(2 * w, h);
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      let c = img.get(i, j);
      fill(getRGBvalue(0,i,j));
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}



function getRGBvalue(n,i,j){
  c = (img.get(i, j)[n]-img.get(i, j-1)[n]);
  if (c>10){
    c=255;
  }
  else{
    c=0;
  }
  return c;}
