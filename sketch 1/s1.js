var clickdistance;
//var sound;

function setup(){
    createCanvas(720,480);
   // sound = loadSound('asset/sou.mp3');
}

function draw(){
	background(mouseX, mouseY, 0);
	circle1();
	circles();
}

function circle1(){
	ellipse(width/2, height/2, 100);
}

function circles(){
	if(clickdistance < 20){
       		 fill(mouseY, mouseX, 255);
   		 }else{
     	   fill(0);
  		  }
    for(var i = 0; i < 30; i ++){
		rect (random(width), random(height),random(20,40),random(20,50));
	}
}

function mouseClicked(){
	 clickdistance = dist(width/2, height/2, mouseX, mouseY);
	// sound.play();
}