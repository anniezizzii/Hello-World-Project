function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  box(20);
  fill(255,255,0,120);

  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  box(30);
  fill(255,0,255,30);

  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  box(40);
  fill(0,mouseY,mouseX,50);

  rotateX(frameCount * 0.06);
  rotateY(frameCount * 0.06);
  box(60);
  fill(0,mouseX,mouseY,30);

  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  box(100);
  fill(mouseY,mouseX,100,50);

  rotateX(frameCount * 0.2);
  rotateY(frameCount * 0.2);
  box(200);
  fill(mouseX,mouseY,100,20);
}