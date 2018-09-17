var ctx;
var canvas;
var temp; var temp2;
var h = 350;
var w = 500;
//set the number and the colors of the lines
var linesNum = 600;
var lines = [];
var colors = ["#AF02BC", "#D63284", "#7AA3F2", "#FFBF0D"];

function setup(){
  background(0);
  createCanvas(600,600);
}

function draw(){
  //every time the animation run, all the shapes will be clear (reset the background every second)
  //ctx.clearRect(0, 0, w, h);
  for(var i = 0; i < linesNum; i++){
    var temp = lines [i];
    for(var z = 0; z < linesNum; z++){ 
       var temp2 = lines [z];
     }
   }
      
      //prevent colors and distance too close to each other
       if(temp.rgb == temp2.rgb & Distance(temp, temp2) < 100){
          ctx.beginPath();
          ctx.moveTo(temp.x, temp.y);
          ctx.lineTo(temp2.x, temp2.y);
          ctx.stroke();
       }
    
    //The temporary x and y change every time
    temp.x += temp.sx;
    temp.y += temp.sy;
    //makes the animation stay within w/h
    if(temp.x > w)temp.x = 0;
    if(temp.x < 0)temp.x = w;
    if(temp.y > h)temp.y = 0;
    if(temp.y < 0)temp.y = h;
    //color setting
    ctx.strokeStyle = temp.rgb;
    ctx.stroke();
  }

  
//The function that defines all the lines
function Lines(){  
  //all the lines are located included w/h randomly
  this.x =  Math.random() * w;
  this.y =  Math.random() * h;
  //the color are chosen randomly from the four colors
  this.rgb = colors [Math.round( Math.random() * 4)];
  //the speed of x and y for all the lines
  this.sx = Math.random();
  this.sy = Math.random();
}

// The function that declear the distance between each line
function Distance (l1,l2){  
  return Math.sqrt(Math.pow(l2.x - l1.x, 2) + Math.pow(l2.y - l1.y, 2) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame||function( callback ){
          };
})();

//the function that renew the screen every time
(function init(){
  for(var i = 0; i < linesNum; i++){
    lines.push(new Lines);
  }
})();

//the animation works
function run(){
  draw();
  requestAnimFrame(loop);
}