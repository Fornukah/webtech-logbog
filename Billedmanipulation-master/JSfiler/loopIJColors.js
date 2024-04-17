
let img;


function preload(){
  img = loadImage('billeder/mps.jpg');
  
}


function setup(){
  createCanvas(img.width,img.height);
  image(img,0,0,img.width,img.height);
  noStroke();
}


//size
 let a = 10

function draw(){


  for (let i=0;i<a;i+=1){
    for (let j=0;j<a;j+=1){
      fill(256/a*i,256/a*j,256,100);
      rect(i*(img.width)/a,j*(img.height)/a,img.width,img.height);
    }
    noLoop();
  }
  
}
