let img;
let farve = [0,0,0];
function preload() {
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
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
      r = img.get(i,j)[0]+img.get(i-1,j)[0]+img.get(i+1,j)[0]
      g = img.get(i,j)[1]+img.get(i-1,j)[1]+img.get(i+1,j)[1]
      b = img.get(i,j)[2]+img.get(i-1,j)[2]+img.get(i+1,j)[2]
      fill([r/3,g/3,b/3]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
