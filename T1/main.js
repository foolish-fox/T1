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

function little_appear(self) {
  var elem = document.getElementById("little_icon");
  elem.style.display = "block";


}
