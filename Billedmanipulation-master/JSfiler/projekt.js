let img;
let threshold = 200;



function preload(){
  img = loadImage('billeder/gruppe.jpg');
}

function setup(){
  w = img.width;
  h = img.height;
  createCanvas(2*w,h);
  noStroke();
  img.loadPixels();

}

function draw(){
  threshold = map(mouseX/2, 0, 2*w, 0, 255);  
  ownFilter2();
  image(img,w,0);

}

function ownFilter2() {
  let r = 1;
  for (let i = 0; i < w; i += 2) {
    for (let j = 0; j < h; j += r) {
      b = map(mouseY,0,h,1,10);
      r = int(random(1,b));
      c = [getPixelValue(0,i,j),getPixelValue(1,i,j),getPixelValue(2,i,j)];
      shadowWeight(threshold)
      fill(c[0],c[1],c[2]);
      rect(i, j, 2, r);
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
function shadowWeight(threshold){
  //Forøg farve
  for (let k=0;k<3;k+=1){
      if (c[k] > threshold) {
          c[k]=255;
        } 
         //Formindsk farve
        if (c[k] < threshold) {
          c[k]=255/8;
        }      
  }
  }
