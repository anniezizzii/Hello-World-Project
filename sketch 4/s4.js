var r = 0;
 
function setup() {
  createCanvas(600,600);
  background(0);
}
 
function draw() {  
  //change the center
  translate(width/2, height/2);
  rotate(r);
  stroke(mouseX, mouseY);
  strokeWeight(1);

  for(var t = 0; t< 10; t++){
    ellipse(t*20, 0, mouseY/(t+1), mouseX/(t+1));
  } 
  r = r + 0.5;
}

function mouseClicked(){
 if(mouseX < width/2 || mouseY <height/2){
    fill(random(0,255), random(255,0), 0, 30);
  } else{
    fill(mouseX, 0, mouseY, 30);
  }

  background(0);
}