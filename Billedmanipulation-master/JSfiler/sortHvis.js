let img;

function preload() {
  img = loadImage("billeder/mps.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw(){
  c = map(mouseX, 0, 800, 0, 1);
  image(img, 0, 0, 800, 800);
  filter(THRESHOLD,c);


}
