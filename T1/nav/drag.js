// JavaScript Document

var mouseDownX = 0,mouseDownY = 0;
var elem = document.getElementById("menu");
var draging = 0;
var target = 0;

function exchange(id_1, id_2) {
  var newNode = document.createElement('div')
  id_1.parentNode.insertBefore(newNode, id_2)
  id_1.parentNode.insertBefore(id_2, id_1)
  id_1.parentNode.insertBefore(id_1, newNode)
  id_1.parentNode.removeChild(newNode)
}

menu.ondragend = function () {
  draging.style.visibility = "visible";
}

menu.ondragover = function (e) {
  draging.style.visibility = "hidden";
  e.preventDefault();
  target = e.target;
  if (target.id.indexOf("num_") == -1) {
    return;
  }
  var targetRect = target.getBoundingClientRect()
  var dragingRect = draging.getBoundingClientRect()
  if (target) {
    // 判断是否动画元素
    if (target.animated) {
      return;
    }
  }
  if (_index(draging) < _index(target)) {
    // 目标比元素大，插到其后面
    // extSibling下一个兄弟元素
    target.parentNode.insertBefore(draging, target.nextSibling)
  } else {
    // 目标比元素小，插到其前面
    target.parentNode.insertBefore(draging, target)
  }
  _animate(dragingRect, draging)
  _animate(targetRect, target)
}

function start(self, X, Y) {
  draging = self;
}

// 获取元素在父元素中的index
function _index(el) {
  var index = 0
  if (!el || !el.parentNode) {
    return -1
  }
  // previousElementSibling：上一个兄弟元素
  while (el && (el = el.previousElementSibling)) {
    index++
  }
  return index
}
// 触发动画

function _animate(prevRect, target) {
  var ms = 300
  if (ms) {
    var currentRect = target.getBoundingClientRect()
    if (prevRect.nodeType === 1) {
      prevRect = prevRect.getBoundingClientRect()
    }
    _css(target, 'transition', 'none')
    _css(target, 'transform', 'translate3d('
      + (prevRect.left - currentRect.left) + 'px,'
      + (prevRect.top - currentRect.top) + 'px,0)'
    );

    target.offsetWidth; // 触发重绘

    _css(target, 'transition', 'all ' + ms + 'ms');
    _css(target, 'transform', 'translate3d(0,0,0)');
    clearTimeout(target.animated);
    target.animated = setTimeout(function () {
      _css(target, 'transition', '');
      _css(target, 'transform', '');
      target.animated = false;
    }, ms);
  }
}
// 给元素添加style
function _css(el, prop, val) {
  var style = el && el.style
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '')
      } else if (el.currentStyle) {
        val = el.currentStyle
      }
      return prop === void 0 ? val : val[prop]
    } else {
      if (!(prop in style)) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px')
    }
  }
}
