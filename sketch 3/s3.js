var mic;
var x = [];
var y = [];

function setup() {
  createCanvas(300,300);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  translate(width/2,height/2);
  background(0);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(127);
 // var h = map(vol, 0, 1, height, 0);

  ellipse(x, y, 10);
  x = x + xspeed;
  y = y + yspeed;
 // ellipse(width/2, h - 25, 50, 50);
}

function addparticle(){
	var speed = vol + 1;
	var clickposition = {

		x: random(width),
		y: random(height),
		xspeed:speed,
		yspeed:-speed,
	}
}