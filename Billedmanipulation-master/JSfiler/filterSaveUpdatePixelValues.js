
// sætter img på canvas med set()
// loader pixels fra canvas
// ownFilter opdaterer nu pixelværdierne direkte
//  mouseClicked funktionen loader de nye pixelværdier efter filter og
// kører filtret igen

let img;
let valg = 0;
let valg2 = 0;
function preload() {
  img = loadImage('billeder/mpsFull.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(w, h);
  noStroke();
  set(0,0,img);
  loadPixels();
}

function draw() {
  ownFilter();
  updatePixels();
  noLoop();
}

function ownFilter() {
    for (let j = 0; j < h; j += 1) {
        for (let i = 0; i < w; i += 1) {
          index = (i+w*j)*4;
          pixels[index+0]= theFilter(0,i,j);
          pixels[index+1] = theFilter(1,i,j);
          pixels[index+2] = theFilter(2,i,j);
    }
  }
}

function theFilter(n,i,j){
  c =  255-getPixelValue(n,i,j);
  return c;
}

function getPixelValue(n,i,j){
  p = pixels[(i+w*j)*4+n];
  return p;
}

function mouseClicked() {
    loadPixels();
    ownFilter();
    updatePixels();
}
