var mysound;

var bubble;

function setup(){
	createCanvas(720,480);
	mysound = createAudio("industry_mad.wav");
	bubble = {
		x: width/2,
		y: height/2,
		r:15
	};
}

function draw(){
	//ellipse(width/2,height/2,30);
	ellipse(bubble.x, bubble.y, bubble.r * 2);
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
	if(bubble.x >width || bubble.x <0){
		bubble.x = width/2;
	}
	if(bubble.y >height || bubble.y <0){
		bubble.y = height/2;
	}
}

function mouseClicked(){
	//thexy of our circle and the place that we click
	var clickdistance = dist(width/2, height/2, mouseX,mouseY);
	if(clickdistance<15){
		fill(100);
		mysound.play();
	}
}