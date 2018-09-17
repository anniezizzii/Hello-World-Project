var clickdistance;

function setup(){
    createCanvas(720,480);
}

function draw(){
	background(mouseX, mouseY, 0);
		if(clickdistance < 20){
       		 fill(mouseY,mouseX);
   		 }else{
     	   fill(255);
  		  }
    ellipse(mouseX, mouseY, 80, 80);
}

function mouseClicked(){
	//thexy of our circle and the place that we click
	 clickdistance = dist(mouseX, mouseY, mouseX,mouseY);
}