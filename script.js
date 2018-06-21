function getRandomColor() {
  const colors = [
    '#FCFFF5',
    '#D1DBBD',
    '#91AA9D',
    '#3E606F',
    '#193441'
  ];
  // const colors = [
  //   '#2C3339',
  //   '#D96446',
  //   '#F3E06B',
  //   '#29384C',
  //   '#E94347'
  // ];
  return colors[Math.floor(Math.random() * colors.length)];
  
}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// Animation begins

var mousePos = {
  x: undefined,
  y: undefined
}

document.addEventListener('mousemove', function(event) {
  mousePos.x = event.x;
  mousePos.y = event.y;
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})


function Circle(x,y,radius, dx, dy, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.minRadius=this.radius;
  this.maxRadius= this.radius*10;
  
  this.draw = function() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fill();
  }
  
  this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;
      
    if(this.x - mousePos.x < 50 && mousePos.x - this.x < 50 &&
       this.y - mousePos.y < 50 && mousePos.y - this.y < 50) {
      if( this.radius < this.maxRadius){  
      this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  }
}
var circleArray = [];
function init() {
  circleArray = [];
  for (var i=0; i<1600; i ++) { 
    var dx = (Math.random() - 0.5) * 2 ;
    var dy = (Math.random() - 0.5) * 2 ;
    var radius = Math.floor(Math.random() * 8);
    var x = Math.random() * (window.innerWidth - radius * 2 ) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2 ) + radius;
    var color =  getRandomColor();
    circleArray.push(new Circle(x, y, radius, dx, dy, color));
  }
}

init();
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // circle.draw();
  for(i = 0; i< circleArray.length; i++) {
    circleArray[i].update();
  }
  
}


animate();