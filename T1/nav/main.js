// JavaScript Document

var lemon_height = 0;
var enge_height = 0;

function lemon_move() {
  var elem = document.getElementById("lemon");
  var id = setInterval(frame, 1);

  function frame() {
    if (lemon_height == -750) {
      lemon_height = 0;
      elem.style.backgroundPositionY = 0;
      clearInterval(id);
      return;
    } else {
      lemon_height -= 3;
      elem.style.backgroundPositionY = lemon_height + 'px';
    }
  }
}

function enge_appear() {
  var elem = document.getElementById("enge");
  elem.style.display = "block";
  elem.style.height = enge_height + 'px';
  var id = setInterval(frame, 1);

  function frame() {
    if (enge_height >= 210) {
      clearInterval(id);
      return;
    } else {
      enge_height += 3;
      elem.style.height = enge_height + 'px';
    }
  }
}

function change_enge(self) {
  var img = document.getElementById("left_icon");

  img.removeAttribute("src");
  img.setAttribute("src", self.children[0].getAttribute("src"));
}


function enge_disappear() {
  var elem = document.getElementById("enge");
  var id = setInterval(frame, 1);

  function frame() {
    if (enge_height <= 0) {
      elem.style.display = "none";
      clearInterval(id);
      return;
    } else {
      enge_height -= 3;
      elem.style.height = enge_height + 'px';
    }
  }
}

window.onload=function(){
	done(document.getElementById("zhonghe"));
	//window.alert();
}

function little_appear(self) {
	done(self);
}

function done(self){
	var nodes = document.getElementById("nav").children;
	for(var i = 0; i < nodes.length ; i++){
		nodes[i].style.backgroundImage = "none";
		nodes[i].style.color = "#828282";
	}	
	self.style.backgroundImage = "url(image/hNavGrayLine.png)";
	self.style.color = "#000000";
	
	
	var item = document.getElementById("menu");
	while(item.hasChildNodes()) //当table下还存在子节点时 循环继续
                {
                    item.removeChild(item.firstChild);
                }
	for(var j=0;j<24;j++){
		var node = document.createElement('div');
		node.className="item";
		node.innerHTML="我是"+self.className+"的div";
		item.appendChild(node);
		
	}
}

