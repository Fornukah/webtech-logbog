let img;

function preload(){
  img = loadImage('billeder/mpsFull.jpg');
}

function setup(){
  w = img.width;
  h = img.height;
  createCanvas(windowWidth, windowHeight);
  noStroke();
  img.loadPixels();

}

function draw(){
  ownFilter();
  fill(255);
  rect(700,100,800,300);
  fill(0);
  textSize(24);
  text('Billedmananipulation - et emne i informatik Rysensteen 2020 \nFiler og program findes på \nhttps://github.com/mpsteenstrup/Billedmanipulation ',750,200);
}

function ownFilter(){
  let pixelSize = int(map(mouseX , 0, width, 2, 26));
  for (let i=0;i<w; i = i+pixelSize){
    for (let j=0;j<h; j = j+pixelSize){
      fill([getPixelValue(0,i,j),  getPixelValue(1,i,j),  getPixelValue(2,i,j)]);
      ellipse(3*i,3*j,3*pixelSize,3*pixelSize);
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
