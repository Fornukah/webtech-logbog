let img;

function preload() {
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = 188;
  h = 242;
  createCanvas(2*w, h);
}

function draw() {
  image(img, 0, 0);
  let c = img.get(mouseX, mouseY);
  print(c);
  fill(c);
  noStroke();
  ellipse(300,100,40,40);
}
