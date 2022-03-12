// JavaScript Document

function find() {
  document.getElementById("list").innerHTML = "";
  var val = document.getElementById("text").value;
  var oScript = document.createElement("script"); //动态创建script标签  
  oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=callback";
  //添加链接及回调函数  
  document.body.appendChild(oScript); //添加script标签  
  document.body.removeChild(oScript); //删除script标签  
  if (document.getElementById("list").style.height < 30) {
    document.getElementById("list").style.display = "none";
  }
}
//回调函数  

function callback(data) {
  data.s.forEach(function (value) {
    var oLi = document.createElement("li");
    oLi.innerHTML = "<a target=_blank href=\"https://www.baidu.com/s?wd=" + value + "\">" + value + "</a>";
    document.getElementById("list").appendChild(oLi);
  })
  document.getElementById("list").style.display = "block";
}
//点击跳转到百度页面，并搜索其中内容
function goto() {
  var val = document.getElementById("text").value;
  location.href = "http://www.baidu.com.cn/s?wd=" + val + "&cl=3";
}
