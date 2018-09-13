var mouseclicks = [];

function setup(){
	createCanvas(500,500);
	var botton = createButton('add particle');
	botton.mousePresse(addparticle);
	noStroke();
	//srtTimeout(1000, gosomeplaceelse);
}
/*
function gosomeplaceelse(){
	window.location = "www.google.ca";
}*/

function draw(){
	translate(width/2,height/2);
 for(var i = 0; i < mouseclicks.length; i++){
 	fill(mouseclicks[i].color);
ellipse(mouseclicks[i].x,mouseclicks[i].y, 10);
mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].speed;
mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].speed;
 }

}

function addparticle(){
	var clickposition = {
		//define the position //=0 //mouseX
		x: random(width),
		y: random(height),
		xspeed:random(-2,2),
		yspeed:random(-2,2),
		color:color(random(100,150), random(255), random(200,255))
	}
	mouseclicks.push(clieckposition);
}

function mouseclicked(){
	//everytime u click the botton, a new hello will show up
	createP("hello!");
}