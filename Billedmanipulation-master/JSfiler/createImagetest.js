let img;

function setup(){
    img = createImage(200, 200);
    print(img);
    createCanvas(200,200);
    background(200);
    img.loadPixels();

for (let i = 0; i < img.width; i++) {
  for (let j = 0; j < img.height; j++) {
    img.set(i, j, color(14, 90, 102));
  }
}}

function draw(){
  img.updatePixels();
  image(img, 0, 0);
  print(img.pixels[10003]);
  noLoop();
}
