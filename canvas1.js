var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);


// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

//ARC /CIRCLE
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();


// for (var i = 0; i < 200; i++) {
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
// }

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    thhis.dy = dy;
    this.radius = radius;
    this.draw = function (){
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }
    this.update = function (){
        if(this.x +this.radius>innerWidth ||this.x-this.radius<0){
            this.dx=-this.dx;
            
        }
        if(this.y +this.radius>innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
            
        }
    
        this.x+=this.dx;
        this.y+=this.dy;

    }

}


var circle = new Circle(200,200 ); 

var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dy=(Math.random()-.5)*8;
var dx = (Math.random()-.5)*8;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    circle.draw();
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();

}

animate();