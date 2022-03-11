// JavaScript Document
var lemon_height=0;

function lemon_move(){
	var elem = document.getElementById("lemon"); 
	var id = setInterval(frame, 1);
	function frame() {
		if (lemon_height == -750) {
			lemon_height=0;
			elem.style.backgroundPositionY = 0; 
			clearInterval(id);
			return;
		} 
		else {
			lemon_height-=3; 
			elem.style.backgroundPositionY = lemon_height + 'px'; 
		}
	}
}