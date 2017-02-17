var c = document.getElementById("thing")

var ctx = c.getContext("2d");

var rid = 0;

var animateDot = function() {

    var x = 25;
    var increase = true;
    window.cancelAnimationFrame(rid);
   
    var drawDot = function(e){
	ctx.clearRect(0, 0, c.width, c.height);
	console.log(rid);
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, x, 0, 2 * Math.PI);
	ctx.fill();
	if (x == 250) {
	    increase = false;
	}
	else if (x == 0) {
	    increase = true;
	}
	if (increase) {
	    x++;
	}
	else {
	    x--;
	}
	rid = window.requestAnimationFrame( drawDot );
    };

    drawDot();
};
    
var stopIt = function() {
    window.cancelAnimationFrame(rid);
};

var sb = document.getElementById('stop');
sb.addEventListener('click', stopIt );

var circle = document.getElementById('circle')
circle.addEventListener('click', animateDot);

//window.requestAnimationFrame(drawDot); //Window is a special object; the visible area of our screen/canvas. Somewhere up in the DOM tree. An event listener.
