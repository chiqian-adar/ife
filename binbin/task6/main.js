var data = [];
var myInput = document.getElementById("inputbox");


function creatList() {
    var myUl = document.getElementById("list");
    myUl.innerHTML = "";
    for(var i =0; i < data.length; i++) {
        var myLi = document.createElement("li");
        myLi.innerHTML = data[i];
        myUl.appendChild(myLi);
    }
    myInput.value = "";
}

//数据处理
function dealStr(text) {
    var text = myInput.value;
    var arr = text.split(/[^\u4e00-\u9fa5\w]+/g).filter(function(e) {
        return e.length !== 0; });
    return arr;
}

//点击事件
function leftIn() {
    var text = myInput.value;
    var arr = dealStr(text);
    if(arr.length === 0) {
        alert("请输入有效数据");
        return;
    }
    data = arr.concat(data)
    creatList();
}

function rightIn() {
    var text = myInput.value;
    var arr = dealStr(text);
    if(arr.length === 0) {
        alert("请输入有效数据");
        return;
    }
    for(var i = 0; i < arr.length; i++) {
        data.push(arr[i]);
    }
    creatList();
}

function leftOut() {
    if(data.length === 0) {
        alert("没有数啦")
        return;
    }
    alert(data.splice(0, 1));
    creatList();
}

function rightOut() {
    if(data.length === 0) {
        alert("没有数啦");
        return;
    }
    alert(data.pop());
    creatList();
}
//点击删除
window.onload =function() {
    var myUl = document.getElementById("list")
    myUl.onclick = function(ev) {
        var ev = ev || window.event
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() === "li") {
            target.parentNode.removeChild(target);
        }
    }
}

function search() {
    var keyword = document.getElementById("search-input").value.trim();
    for(var i = 0; i < data.length; i++) {
        var key = new RegExp(keyword)
        if(key.test(data[i])) {
            var myUl = document.getElementById("list");
            var myLi = myUl.getElementsByTagName("li");
            myLi[i].style.color = "green";
        }
    }
}
//事件绑定
var btn1 = document.getElementById("left-in");
btn1.onclick = leftIn;
var btn2 = document.getElementById("right-in");
btn2.onclick = rightIn;
var btn3 = document.getElementById("left-out");
btn3.onclick = leftOut;
var btn4 = document.getElementById("right-out");
btn4.onclick = rightOut;
var btn5 = document.getElementById("search");
btn5.onclick = search;

