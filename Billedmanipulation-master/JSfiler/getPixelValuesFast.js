let img;

function preload() {
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(3 * w, h);
  noStroke();
  img.loadPixels();
}

function draw() {
  background(255);
  image(img, 0, 0);
  let c = [getPixelValue(0,mouseX,mouseY),getPixelValue(1,mouseX,mouseY),getPixelValue(2,mouseX,mouseY)];
  print(c);
  textSize(100)
  text('RGB værdi:', w+200, 300, 300, 1000);
  text(c, w+100, 600);
  fill(c);
  ellipse(w+100,100,150,150);
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
