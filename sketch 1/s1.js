function setup(){
	createCanvas(600,600);

}

function draw(){
	background(random(100));
	for(var i = 0, i < 10; i ++){
		ellipse(random(width),random(height),10);
	}
}