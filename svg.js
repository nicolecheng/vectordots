var button = document.getElementById("b"); 
var s = document.getElementById("savage");
var started = false;
var x = 0;
var y = 0;

button.addEventListener("click", function(){
    while (s.lastChild) {
	s.removeChild(s.lastChild);
    }
    started = false;
});

var dots = function(e){
    if(!started){
	x = e.offsetX;
	y = e.offsetY;
    }
    var tempx = e.offsetX;
    var tempy = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",tempx); // set center x-val to 0
    c.setAttribute("cy",tempy);
    c.setAttribute("r","25");
    c.setAttribute("fill","yellow");
    s.appendChild(c);
    if(started){
	var m = document.createElementNS("http://www.w3.org/2000/svg","line");
	m.setAttribute("x1",x);
	m.setAttribute("y1",y);
	m.setAttribute("x2",tempx);
	m.setAttribute("y2",tempy);
	m.setAttribute("stroke","black");
	m.setAttribute("stroke-width","1");
	s.appendChild(m);
    }
    x = tempx;
    y = tempy;
    started = true;
};


s.addEventListener("click", dots);
