// var mysound;

// var bubble;

// function setup(){
// 	createCanvas(720,480);
// 	mysound = createAudio("industry_mad.wav");
// 	bubble = {
// 		x: width/2,
// 		y: height/2,
// 		r:15
// 	};
// }

// function draw(){
// 	//ellipse(width/2,height/2,30);
// 	ellipse(bubble.x, bubble.y, bubble.r * 2);
// 	bubble.x = bubble.x + random(-5,5);
// 	bubble.y = bubble.y + random(-5,5);
// 	if(bubble.x >width || bubble.x <0){
// 		bubble.x = width/2;
// 	}
// 	if(bubble.y >height || bubble.y <0){
// 		bubble.y = height/2;
// 	}
// }

// function mouseClicked(){
// 	//thexy of our circle and the place that we click
// 	var clickdistance = dist(width/2, height/2, mouseX,mouseY);
// 	if(clickdistance<15){
// 		fill(100);
// 		mysound.play();
// 	}
// }

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

  ellipse(x, y, 30);
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